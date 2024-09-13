import ip, { address } from "ip"; 
import Country from "../../../../models/country";
import State from "../../../../models/state";
const { Types } = require("mongoose");
const Mongoose = require('mongoose'); 
import Joi from "joi";
import bcrypt from "bcryptjs";
import speakeasy from "speakeasy";
import qrcode from "qrcode";
const userModel = require("../../../../models/user");
import _ from "lodash";
import apiError from "../../../../helper/apiError";
import response from "../../../../../assets/response";
import responseMessage from "../../../../../assets/responseMessage";
import userType from "../../../../enums/userType"; 
import coinImage from "../../../../enums/coinImage";
import commonFunction from "../../../../helper/util";
import jwt from "jsonwebtoken";

const axios = require("axios");
import status from "../../../../enums/status"; 
import coinType, { XRP } from "../../../../enums/coinType"; 
import sendNotification from "../../../../helper/notificationUtil"; 

// ******************Importing services *************************************//
import { userServices } from "../../services/user";  
import { notificationServices } from "../../services/notification"; 
import { faqServices } from "../../services/faq";  
import { array } from "joi/lib/types/array";
// import Loan from "../../../../models/loanSchema.js";
 
 
const {
  checkUserExists,
  createUser,
  findUser,
  findUserForOtp,
  userFindList,
  findUserData,
  updateUser,
  updateUserForOtp,
  updateUserById,
  paginateSearch,
  paginateSearchAllUser,
  paginateFriendId,
  findFriend,
  userAllDetails,
  findCount,
} = userServices;
 
const {
  notificationCreate,
  findNotification,
  updateNotification,
  multiUpdateNotification,
  notificationList,
  notificationListWithSort,
} = notificationServices;
const { createFAQ, findFAQ, updateFAQ, faqListWithPagination, FAQList } =
  faqServices; 

export class userNewController {

  /**
   * @swagger
   * /userNew/signUp:
   *   post:
   *     tags:
   *       - USER_2.0
   *     description: SignUp with basic details of the user on the platform for registration
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: signUp
   *         description: Sign up request body
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             mobileNumber:
   *               type: string
   *             countryCode:
   *               type: string
   *             deviceToken:
   *               type: string
   *             deviceType:
   *               type: string
   *     responses:
   *       200:
   *         description: OTP sent successfully
   */
  async signUp(req, res, next) {
    const validationSchema = {
      mobileNumber: Joi.string().required(),
      countryCode: Joi.string().required(),
      deviceToken: Joi.string().optional(),
      deviceType: Joi.string().optional(),
    };

    try {
      if (req.body.mobileNumber) {
        const validatedBody = await Joi.validate(req.body, validationSchema);
        let { mobileNumber, countryCode, deviceToken, deviceType } = validatedBody;

        var userInfo = await findUserData({
          mobileNumber: mobileNumber,
          status: { $ne: status.DELETE },
        });

        if (userInfo) {
          if (!userInfo.otpVerification) {
            validatedBody.otp = commonFunction.getOTP();
            validatedBody.otpTime = new Date().getTime() + 180000;
            result = await updateUser(
              { _id: userInfo._id },
              { otp: validatedBody.otp, otpTime: validatedBody.otpTime }
            );
            console.log("result======>>>>>>>===========>>>", result);
            result = _.omit(
              JSON.parse(JSON.stringify(result)),
              "otp",
              "otpTime"
            );
            let obj = {
              _id: result._id,
              mobileNumber: result.mobileNumber,
              otp: validatedBody.otp,
            };
            return res.json(new response(obj, responseMessage.OTP_SEND));
          }
          if (userInfo.otpVerification) {
            throw apiError.conflict(responseMessage.MOBILE_EXIST);
          }
        }

        validatedBody.otp = commonFunction.getOTP();
        validatedBody.otpTime = new Date().getTime() + 180000;

        // Send OTP via SMS
        const mss = await commonFunction.sendMailOtpNodeMailer(
          mobileNumber,
          validatedBody.otp
        );

        var result = await createUser(validatedBody);

        // Update device information
        if (!deviceType && deviceToken) {
          deviceType = "defaultDeviceType";
        }
        await updateUser({ _id: result._id }, { deviceToken, deviceType });

        // Generate address
        generateAddresss(result._id);

        // Omit sensitive information from the response
        result = _.omit(JSON.parse(JSON.stringify(result)), "otp", "otpTime");

        let obj = {
          _id: result._id,
          mobileNumber: result.mobileNumber,
          otp: validatedBody.otp,
        };

        return res.json(new response(obj, responseMessage.OTP_SEND));
      } else {
        throw apiError.conflict(responseMessage.NUMBER_NOT_FOUND);
      }
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }


  /**
    * @swagger
    * /userNew/verifyOTP:
    *   patch:
    *     tags:
    *       - USER_2.0
    *     description: verifyOTP  OTP after signUp with  mobileNumber
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: verifyOTP
    *         description: verifyOTP
    *         in: body
    *         required: true
    *         schema:
    *           $ref: '#/definitions/verifyOTP'
    *     responses:
    *       200:
    *         description: Returns success message
    */
  async verifyOTP(req, res, next) {
    var validationSchema = {
      mobileNumber: Joi.string().required(),
      otp: Joi.number().required(),
    };
    try {

      var validatedBody = await Joi.validate(req.body, validationSchema);
      const { mobileNumber, otp } = validatedBody;

      var userResult = await findUserData({
        mobileNumber: mobileNumber,
        status: { $ne: status.DELETE },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      if (new Date().getTime() > userResult.otpTime) {
        throw apiError.badRequest(responseMessage.OTP_EXPIRED);
      }
      if (userResult.otp != otp) {
        throw apiError.badRequest(responseMessage.INCORRECT_OTP);
      }

      const referralCode = "O" + commonFunction.makeReferral();
      if (userResult.invitationCode) {
        let checkReferralCode = await findUser({
          referralCode: userResult.invitationCode,
          status: { $ne: status.DELETE },
        });
        if (checkReferralCode) {
          await updateUser(
            { _id: checkReferralCode._id },
            { $inc: { "referralHistory.totalReferralCount": 1 } }
          );
          await updateUser(
            { _id: checkReferralCode._id },
            {
              $push: {
                "referralHistory.totalReferralUsers": {
                  referralUserId: userResult._id,
                },
              },
            }
          );

          const referralHistory = await createReferral({
            referralUserId: userResult._id,
            userId: checkReferralCode._id,
          });
          console.log("🚀 ~ file: controller.js:349 ~ userController ~ verifyOTP ~ referralHistory:", referralHistory)
        }
      }

      var updateResult = await updateUser(
        { _id: userResult._id },
        { otpVerification: true, referralCode: referralCode }
      );
      var token = await commonFunction.getToken({
        _id: updateResult._id,
        mobileNumber: updateResult.mobileNumber,
        userType: updateResult.userType,
      });
      var obj = {
        _id: updateResult._id,
        mobileNumber: updateResult.mobileNumber,
        otpVerification: true,
        token: token,
        referralCode: updateResult.referralCode,

      };
      return res.json(new response(obj, responseMessage.OTP_VERIFY));
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /userNew/viewProfile:
   *   get:
   *     tags:
   *       - USER_2.0
   *     description: get viewProfile details of particular USER
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async viewProfile(req, res, next) {
    try {
      let userResult = await findUser({
        _id: req.userId,
      });
      console.log(req.userId, 10)
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }

      return res.json(
        new response(userResult, responseMessage.DETAILS_FETCHED)
      );
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /userNew/editProfile:
   *   put:
   *     tags:
   *       - USER_2.0
   *     description: Edit profile
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: editProfile
   *         description: editProfile
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/editProfile'
   *     responses:
   *       200:
   *         description: Returns success message
   */

  async editProfile(req, res, next) {
    const validationSchema = {
      countryCode: Joi.string().allow("").optional(),
      firstName: Joi.string().allow("").optional(),
      lastName: Joi.string().allow("").optional(),
      dateOfBirth: Joi.string().allow("").optional(),
      city: Joi.string().allow("").optional(),
      streetName: Joi.string().allow("").optional(),
      buildingName: Joi.string().allow("").optional(),
      latitude: Joi.number().allow("").optional(),
      longitude: Joi.number().allow("").optional(),
      email: Joi.string().allow("").optional(),
      profilePic: Joi.string().allow("").optional(),
      passCode: Joi.string().allow("").optional(),
      location: Joi.string().allow("").optional(),
      userName: Joi.string().allow("").optional(),
      countryOfResidence: Joi.string().allow("").optional(),
      marketingOfferNotification: Joi.boolean().allow("").optional(),
      transactionNotification: Joi.boolean().allow("").optional(),
      investmentNewsNotification: Joi.boolean().allow("").optional(),
    };

    try {
      const validatedBody = await Joi.validate(req.body, validationSchema);
      let userResult = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
      });

      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }

      if (req.body.longitude && req.body.latitude) {
        const coordinates = [
          parseFloat(validatedBody.longitude),
          parseFloat(validatedBody.latitude),
        ];
        validatedBody.location = { type: "point", coordinates };
      }

      validatedBody.passCode = bcrypt.hashSync(validatedBody.passCode, 10);


      if (req.body.email && req.body.email != "") {
        var emailResult = await findUser({
          email: req.body.email,
          _id: { $ne: userResult._id },
          status: { $ne: status.DELETE },
        });
        if (emailResult) {
          throw apiError.conflict(responseMessage.EMAIL_EXIST);
        }
      }

      if (req.body.mobileNumber && req.body.mobileNumber != "") {
        var mobileResult = await findUser({
          mobileNumber: req.body.mobileNumber,
          _id: { $ne: userResult._id },
          status: { $ne: status.DELETE },
        });
        if (mobileResult) {
          throw apiError.conflict(responseMessage.MOBILE_EXIST);
        }
      }
      var { files } = req;
      if (files) {
        validatedBody.profilePic = await commonFunction.getImageUrl1(req.files);
      }
      var result = await updateUser({ _id: userResult._id }, validatedBody);
      return res.json(new response(result, responseMessage.USER_UPDATED));
    } catch (error) {
      console.error("Error in edit profile ==========>>", error);
      return next(error);
    }
  }

  /**
    * @swagger
    * /userNew/login:
    *   post:
    *     tags:
    *       - USER_2.0
    *     description: login with email || mobileNumber and passCode
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: login
    *         description: login
    *         in: body
    *         required: true
    *         schema:
    *           $ref: '#/definitions/login'
    *     responses:
    *       200:
    *         description: Returns success message
    */

  async login(req, res, next) {
    const validationSchema = {
      userId: Joi.string().optional(),
      passCode: Joi.string().optional(),
    };

    try {
      const validatedBody = await Joi.validate(req.body, validationSchema);
      const { userId, passCode } = validatedBody;

      if (!userId) {
        throw apiError.validationError('Please provide either email or mobileNumber.');
      }

      const userResult = await findUser({
        $and: [
          { status: { $ne: status.DELETE } },
          { userType: userType.USER },
          {
            $or: [
              { email: userId },
              { mobileNumber: userId },
            ],
          },
        ],
      });

      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }

      if (userResult.status === 'BLOCK') {
        throw apiError.conflict(responseMessage.ACCOUNT_BLOCKED);
      }

      if (!bcrypt.compareSync(passCode, userResult.passCode)) {
        if (userResult.attemptKey < 3) {
          await updateUser({ _id: userResult._id }, { $inc: { attemptKey: 1 } });
        } else if (userResult.attemptKey === 3) {
          await updateUser({ _id: userResult._id }, { status: 'BLOCK' });
          throw apiError.conflict(responseMessage.ACCOUNT_BLOCKED);
        }

        throw apiError.conflict(responseMessage.INCORRECT_LOGIN);
      }

      await updateUser({ _id: userResult._id }, { attemptKey: 0 });
      var otpByEmail = commonFunction.getOTP();
      var newOtpByEmail = otpByEmail;
      var timeByEmail = Date.now() + 180000;

      //  await commonFunction.sendMailOtpNodeMailer(userResult.email, otpByEmail);

      var updateResultByEmail = await updateUser(
        { _id: userResult._id },
        { $set: { otpEmail: newOtpByEmail, otpTimeEmail: timeByEmail, otpVerificationEmail: false } }
      );

      var otpByMobile = commonFunction.getOTP();
      var newOtpByMobile = otpByMobile;
      var timeByMobile = Date.now() + 180000;

      var updateResultByMobile = await updateUser(
        { _id: userResult._id },
        { $set: { otpMobile: newOtpByMobile, otpTimeMobile: timeByMobile, otpVerificationMobile: false } }
      );

      var obj = {
        _id: userResult._id,
        otpTimeMobile: updateResultByMobile,

      };
      return res.json(new response(obj, responseMessage.OTP_SEND));
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /userNew/forgotPassCode:
   *   post:
   *     tags:
   *       - USER_2.0
   *     description: Request to generate and send an OTP for password reset
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: forgotPassCode
   *         description: forgotPassCode
   *         in: body
   *         required: false
   *         schema:
   *           $ref: '#/definitions/forgotPassCode'
   *     responses:
   *       200:
   *         description: OTP sent successfully
   */
  async forgotPassCode(req, res, next) {
    var validationSchema = {
      userId: Joi.string().required(),

    };

    try {
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const { userId } = validatedBody;

      if (!userId) {
        throw apiError.validationError('Please provide either email or mobileNumber.');
      }

      const userResult = await findUser({
        $and: [
          { status: { $ne: status.DELETE } },
          { userType: userType.USER },
          {
            $or: [
              { email: userId },
              { mobileNumber: userId },
            ],
          },
        ],
      });

      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }

      if (userResult.status === 'BLOCK') {
        throw apiError.conflict(responseMessage.ACCOUNT_BLOCKED);
      }

      var otpByEmail = commonFunction.getOTP();
      var newOtpByEmail = otpByEmail;
      var timeByEmail = Date.now() + 180000;

      //  await commonFunction.sendMailOtpNodeMailer(userResult.email, otpByEmail);

      var updateResultByEmail = await updateUser(
        { _id: userResult._id },
        { $set: { otpEmail: newOtpByEmail, otpTimeEmail: timeByEmail, otpVerificationEmail: false } }
      );

      var otpByMobile = commonFunction.getOTP();
      var newOtpByMobile = otpByMobile;
      var timeByMobile = Date.now() + 180000;

      var updateResultByMobile = await updateUser(
        { _id: userResult._id },
        { $set: { otpMobile: newOtpByMobile, otpTimeMobile: timeByMobile, otpVerificationMobile: false } }
      );

      var obj = {
        _id: userResult._id,
        otpTimeMobile: updateResultByMobile,

      };
      return res.json(new response(
        obj, responseMessage.OTP_SEND
      ));
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }


  /**
   * @swagger
   * /userNew/verifyEmailOtp:
   *   post:
   *     tags:
   *       - USER_2.0
   *     description: verifyotpPassCode  OTP with mobileNumber || email
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: email
   *         description: email
   *         in: formData
   *         required: false
   *       - name: otp
   *         description: otp
   *         in: formData
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async verifyEmailOtp(req, res, next) {
    var validationSchema = {
      email: Joi.string().required(),
      otp: Joi.number().optional(),
    };
    try {
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const { email, otp } = validatedBody;

      let userResult;
      userResult = await findUserForOtp({
        $and: [
          { status: { $ne: status.DELETE } },
          { userType: userType.USER },
          { $or: [{ mobileNumber: email }, { email: email }] },
        ],
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      if (new Date().getTime() > userResult.otpTimeEmail) {
        throw apiError.badRequest(responseMessage.OTP_EXPIRED);
      }
      if (userResult.otpEmail != otp) {
        throw apiError.badRequest(responseMessage.INCORRECT_OTP);
      }
      var updateResult = await updateUser(
        { _id: userResult._id },
        { otpVerificationEmail: true }
      );
      var token = await commonFunction.getToken({
        _id: updateResult._id,
        email: updateResult.email,
        userType: updateResult.userType,
      });
      var obj = {
        _id: updateResult._id,

        token: token,
      };
      return res.json(new response(obj, responseMessage.OTP_VERIFY));
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /userNew/verifyMobileOtp:
   *   post:
   *     tags:
   *       - USER_2.0
   *     description: verifyotpPassCode  OTP with mobileNumber || email
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: mobileNumber
   *         description: mobileNumber
   *         in: formData
   *         required: false
   *       - name: otp
   *         description: otp
   *         in: formData
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async verifyMobileOtp(req, res, next) {
    var validationSchema = {
      mobileNumber: Joi.string().required(),
      otp: Joi.number().optional(),
    };
    try {
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const { email, otp } = validatedBody;

      let userResult;
      userResult = await findUserForOtp({
        $and: [ 
          { status: { $ne: status.DELETE } },

          { userType: userType.USER },
          { $or: [{ mobileNumber: validatedBody.mobileNumber }] },
        ],
      });
      console.log("🚀 ~ userNewController ~ verifyMobileOtp ~ userResult:101", userResult)
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      console.log(userResult, 102)
      if (new Date().getTime() > userResult.otpTimeMobile) {
        throw apiError.badRequest(responseMessage.OTP_EXPIRED);
      }
      if (userResult.otpMobile != otp) {
        throw apiError.badRequest(responseMessage.INCORRECT_OTP);
      }
      var updateResult = await updateUser(
        { _id: userResult._id },
        { otpVerificationMobile: true }
      );
      var token = await commonFunction.getToken({
        _id: updateResult._id,
        mobileNumber: updateResult.mobileNumber,
        userType: updateResult.userType,
      });
      var obj = {
        _id: updateResult._id,

        token: token,
      };
      return res.json(new response(obj, responseMessage.OTP_VERIFY));
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /userNew/resendEmailOTP:
   *   post:
   *     tags:
   *       - USER_2.0
   *     description: Resend OTP (One Time Password)
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: email
   *         description: email
   *         in: formData
   *         required: true
   *     responses:
   *       200:
   *         description: Returns success message after resending OTP
   */
  async resendEmailOTP(req, res, next) {
    var validationSchema = {
      email: Joi.string().required(),
    };
    try {
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const { email } = validatedBody;
      var userResult;
      if (email) {
        userResult = await findUserForOtp({
          $and: [
            { status: { $ne: status.DELETE } },
            { userType: userType.USER },
            { email: email },
          ],
        });
        if (!userResult)
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
        var otp = commonFunction.getOTP();
        var otpTime = new Date().getTime() + 180000;

        //  await commonFunction.sendMailOtpNodeMailer(userResult.email, otp)

        var updateResult = await updateUserForOtp(
          { _id: userResult._id },
          {
            otpEmail: otp,
            otpTimeEmail: otpTime,
            otpVerificationEmail: false
          }
        );
        return res.json(new response(updateResult, responseMessage.OTP_SEND));
      } else {
        throw apiError.conflict(responseMessage.NUMBER_NOT_FOUND);
      }
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /userNew/resendMobileOTP:
   *   post:
   *     tags:
   *       - USER_2.0
   *     description: Resend OTP (One Time Password)
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: mobileNumber
   *         description: mobileNumber
   *         in: formData
   *         required: true
   *     responses:
   *       200:
   *         description: Returns success message after resending OTP
   */
  async resendMobileOTP(req, res, next) {
    var validationSchema = {
      mobileNumber: Joi.string().required(),
    };
    try {
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const { mobileNumber } = validatedBody;
      var userResult;
      if (mobileNumber) {
        userResult = await findUserForOtp({
          $and: [
            { status: { $ne: status.DELETE } },
            { userType: userType.USER },
            { mobileNumber: mobileNumber },
          ],
        });
        if (!userResult)
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
        var otp = commonFunction.getOTP();
        var otpTime = new Date().getTime() + 180000;

        await commonFunction.sendSmsTwilio(
          userResult.countryCode + mobileNumber,
          otp
        );
        var updateResult = await updateUserForOtp(
          { _id: userResult._id },
          {
            otpMobile: otp,
            otpTimeMobile: otpTime,
            otpVerificationMobile: false
          }
        );
        return res.json(new response({}, responseMessage.OTP_SEND));
      } else {
        throw apiError.conflict(responseMessage.NUMBER_NOT_FOUND);
      }
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /userNew/updatePasscode:
   *   put:
   *     tags:
   *       - USER_2.0
   *     description: Change Password
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token of user
   *         in: header
   *         required: true
   *       - name: newPasscode
   *         description: newPasscode
   *         in: formData
   *         required: true
   *       - name: confirmPasscode
   *         description: confirmPasscode
   *         in: formData
   *         required: true
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async updatePasscode(req, res, next) {
    const validationSchema = {
      newPasscode: Joi.string().required(),
      confirmPasscode: Joi.string().required(),
    };

    try {
      let validatedBody = await Joi.validate(req.body, validationSchema);
      let userResult = await findUser({ _id: req.userId });
      console.log("🚀 ~ userNewController ~ updatePasscode ~ userResult:", userResult)

      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      if (!userResult.otpVerificationEmail && !userResult.otpVerificationMobile) {
        throw apiError.badRequest(responseMessage.EMAIL_MOBILE_OTP);
      } else if (!userResult.otpVerificationEmail) {
        throw apiError.badRequest(responseMessage.EMAIL_OTP);
      } else if (!userResult.otpVerificationMobile) {
        throw apiError.badRequest(responseMessage.MOBILE_OTP);
      }
      if (validatedBody.newPasscode !== validatedBody.confirmPasscode) {
        throw apiError.badRequest(responseMessage.PWD_NOT_MATCH);
      }

      const hashedPasscode = bcrypt.hashSync(validatedBody.newPasscode, 10);

      let updated = await updateUserById(userResult._id, {
        passCode: hashedPasscode,
      });

      return res.json(new response(updated, responseMessage.PWD_CHANGED));
    } catch (error) {
      return next(error);
    }
  }

  /**
    * @swagger
    * /userNew/applyKYC:
    *   post:
    *     tags:
    *       - KYC_MANAGEMENT_2.0
    *     description: applyKYC by USER
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: token
    *         description: token of user
    *         in: header
    *         required: true
    *       - name: applyKYC
    *         description: applyKYC
    *         in: body
    *         required: false
    *         schema:
    *           $ref: '#/definitions/applyKYC'
    *       - name: docType
    *         description: docType
    *         enum: ["PASSPORT","DRIVERS_LISENCE"]
    *         in: query
    *         required: false
    *     responses:
    *       200:
    *         description: Returns success message
    */

  async applyKYC(req, res, next) {
    const validationSchema = {
      country: Joi.string().required(),
      kycProfilePic: Joi.string().required(),
      docType: Joi.string().optional(),
    };

    try {
      const validatedBody = await Joi.validate({ docType: req.query.docType, ...req.body }, validationSchema);
      const userResult = await findUser({
        _id: req.userId,

      });

      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }

      const kycResult = await findKYC({
        userId: userResult._id,
        status: { $ne: status.DELETE },
      });

      validatedBody.approveStatus = kycResult ? kycApprove.PENDING : kycApprove.PENDING;
      validatedBody.isApplied = true;
      validatedBody.userId = userResult._id;

      await notificationCreate({
        userId: userResult._id,
        type: "NOTIFICATION",
        title: "Add KYC",
        message: "Your KYC has been submitted",
      });

      if (kycResult) {
        await updateKYC({ userId: userResult._id }, validatedBody);
        await updateUser({ _id: userResult._id }, { kycVerified: false, approveStatus: kycApprove.PENDING });
      } else {
        await createKYC(validatedBody);
        await updateUser({ _id: userResult._id }, validatedBody);
      }
      var { files } = req;
      if (files) {
        validatedBody.kycProfilePic = await commonFunction.getImageUrl1(req.files);
      }
      let obj = {
        userId: userResult._id,
        docType: validatedBody.docType,
        kycProfilePic: validatedBody.kycProfilePic
      }
      return res.json(new response(obj, responseMessage.ADD_KYC));
    } catch (error) {
      console.log("error=======>>>", error);
      return next(error);
    }
  }


  /**
   * @swagger
   * /userNew/addInvitationLink:
   *   post:
  *     summary: Add an Invitation Link
   *     tags:
   *       - USER_2.0
   *     description: Create and add an Invitation Link for the USER_2.0.
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *     responses:
   *       200:
   *         description: Returns success message
   */

  async addInvitationLink(req, res, next) {
    try {

      const userData = await findUser({
        _id: req.userId,
        userType: { $in: [userType.USER, userType.ADMIN] }, // This includes both USER and ADMIN types
      });

      // const existingAffiliate = await findAffiliate({
      console.log("🚀 ~ userNewController ~ addInvitationLink ~ userData:", userData)
      //   email: validationResult.value.email,
      // });
      // if (existingAffiliate) {
      //   await commonFunction.sendMailLink(validationResult.value.email, link);
      //   return res.json(new response({}, responseMessage.LINK_UPDATE));
      // }

      // // Generate invitation link
      const link =
        "https://pro.mbaacademy.asia/register?referralCode=" +
        userData.referralCode;

      // // Send invitation link
      // await commonFunction.sendMailLink(validationResult.value.email, link);
      // // Create static content
      // const result = await createAffiliate({
      //   email: validationResult.value.email,
      //   userId: userData._id,
      // });

      let obj = {
        _id: userData._id,
        link: link
      }

      // Return response
      return res.json(new response(obj, responseMessage.LINK_UPDATE));
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }

  /**
    * @swagger
    * /userNew/getReferralList:
    *   get:
    *     tags:
    *       - USER_2.0
    *     description: Referral list 
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: token
    *         description: User token
    *         in: header
    *         required: true
    *     responses:
    *       200:
    *         description: Data found successfully.
    *       404:
    *         description: User not found || Data not found.
    *       501:
    *         description: Something went wrong!
    */
  async getReferralList(req, res, next) {
    try {
      let userResult = await findUser({ _id: req.userId, userType: userType.USER });

      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      } else {
        const data = await userFindList({ userType: userType.USER });

        if (data.length == 0) {
          throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
        } else {
          // Filter users based on referralCode and invitationCode
          const referralList = data.filter((user) => {
            return userResult.referralCode === user.invitationCode;
          });

          return res.json(new response(referralList, responseMessage.DATA_FOUND));
        }
      }
    } catch (error) {
      return next(error);
    }
  }

  /**
    * @swagger
    * /userNew/getImageUrl:
    *   post:
    *     summary: User
    *     tags:
    *       - USER_2.0
    *     description: getImageUrl
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: image 
    *         description: image
    *         in: formData
    *         type: file
    *         required: false
    *     responses:
    *       200:
    *         description: User getImageUrl successfully
    */
  async getImageUrl(req, res, next) {
    const validationSchema = Joi.object({
      image: Joi.string().optional(),
    });
    try {
      
      const validatedBody = await Joi.validate(req.body, validationSchema);
      console.log("🚀 ~ userNewController ~ getImageUrl ~ validatedBody:", (req.files))
      if (req.files && req.files.length != 0) {
        let imgUrl1 = await commonFunction.getImageUrl(req.files[0].path);
        console.log("🚀 ~ userNewController ~ getImageUrl ~ imgUrl1:", imgUrl1)
        validatedBody.image = imgUrl1.secure_url;
      }
      return res.json(new response(validatedBody.image, responseMessage.DATA_FOUND));
    } catch (error) {
      return next(error);
    }
  }


/**
 * @swagger
 * /userNew/addFriendRequest:
 *   post:
 *     tags:
 *       - FRIEND_REQUEST
 *     description: addFriendRequest
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: receiverId
 *         description: receiverId
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Returns success message
 */

async addFriendRequest(req, res, next) {
  const validationSchema = {
      receiverId: Joi.string().required(),
  };

  try {
      const validatedQuery = await Joi.validate(req.query, validationSchema);

      const userResult = await findUser({
          _id: req.userId,
          status: { $ne: status.DELETE },
      });

      if (!userResult) {
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }

      const receiverData = await findUser({
          _id: validatedQuery.receiverId,
      });

      if (!receiverData) {
          throw apiError.notFound(responseMessage.RECEIVER_NOT_FOUND);
      }

      let userData = await findRequest({ userId: req.userId });
      console.log("🚀 ~ userNewController ~ addFriendRequest ~ userData:", userData.receiverId)
      userData.receiverId.map((ele)=>
      {
        if(ele==validatedQuery.receiverId)
        {
          throw apiError.notFound(responseMessage.REQUEST_ALREADY_SENT);
        }
        console.log(ele)
      })
      if (!userData) {
        const createStatus = await createRequest({
          receiverId: validatedQuery.receiverId,
          userId: userResult._id,
      });      } else {
        await updateRequest({ userId: userData.userId }, { $push: { receiverId: validatedQuery.receiverId } })
      }
    
      return res.json(new response([], responseMessage.REQ_SENT));
  } catch (error) {
      console.log("error=======>>>", error);
      return next(error);
  }
}

/**
 * @swagger
 * /userNew/getFriendRequestListSent:
 *   get:
 *     tags:
 *       - FRIEND_REQUEST
 *     description: getFriendRequestListSent
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: Returns success message
 */
async getFriendRequestListSent(req, res, next) {
  try {
      const userResult = await requestList({
        userId: req.userId
      });
      console.log(userResult, 101)
      if (!userResult) {
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      return res.json(new response(userResult, responseMessage.DATA_FOUND));
  } catch (error) {
      return next(error);
  }
}

/**
 * @swagger
 * /userNew/acceptFriendRequest:
 *   post:
 *     tags:
 *       - FRIEND_REQUEST
 *     description: acceptFriendRequest
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: receiverId
 *         description: receiverId
 *         in: query
 *         required: true
 *       - name: friendRequestStatus
 *         description: friendRequestStatus
 *         enum: ["ACCEPT", "REJECT", "PENDING"]
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Returns success message
 */
async acceptFriendRequest(req, res, next) {
  try {
      const validationSchema = Joi.object({
          receiverId: Joi.string().required(),
          friendRequestStatus: Joi.string().valid("ACCEPT", "REJECT", "PENDING").required(),
      });

      const validatedQuery = await Joi.validate(req.query, validationSchema);
      const { friendRequestStatus } = validatedQuery;

      const userResult = await findRequest({
          userId: req.userId,
          status: { $ne: status.DELETE },
      });

      if (!userResult) {
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }

      const receiverData = await findRequest({
          receiverId: validatedQuery.receiverId,
      });

      if (!receiverData) {
          throw apiError.notFound(responseMessage.RECEIVER_NOT_FOUND);
      }

      // Update friend request status
      const updateStatus = await updateRequest(
          { userId: req.userId, receiverId: validatedBody.receiverId },
          { $set: { friendRequestStatus: friendRequestStatus } }
      );

      if (!updateStatus) {
          throw apiError.notFound(responseMessage.REQUEST_NOT_FOUND);
      }

      return res.json(new response(receiverData, responseMessage.DATA_FOUND));
  } catch (error) {
      return next(error);
  }
}




}
export default new userNewController();


const generateAddresss = async (userId) => {
  let count = await findCount({ status: { $ne: status.DELETE } });
  const [erc20Res, trc20, btc] = await Promise.allSettled([
    erc20Func.generateAddress(count),
    trc20func.generateTRXWallet(count),
    btcFunc.generateAddress(count),
  ]);
  const addressObj = [
    {
      coinName: coinType.USDT,
      coinType: coinType.USDT,
      userId: userId,
      balance: 0,
      coinImage: coinImage.USDT,
      erc20: {
        address: erc20Res.status === "fulfilled" ? erc20Res.value.address : "",
        privateKey:
          erc20Res.status === "fulfilled" ? erc20Res.value.privateKey : "",
      },
      trc20: {
        address: trc20.status === "fulfilled" ? trc20.value.address : "",
        privateKey: trc20.status === "fulfilled" ? trc20.value.privateKey : "",
      },
      bep20: {
        address: erc20Res.status === "fulfilled" ? erc20Res.value.address : "",
        privateKey:
          erc20Res.status === "fulfilled" ? erc20Res.value.privateKey : "",
      },
    },
    {
      coinName: coinType.ETH,
      coinType: coinType.ETH,
      userId: userId,
      balance: 0,
      coinImage: coinImage.ETH,
      address: erc20Res.status === "fulfilled" ? erc20Res.value.address : "",
      privateKey:
        erc20Res.status === "fulfilled" ? erc20Res.value.privateKey : "",
    },
    {
      coinName: coinType.BTC,
      coinType: coinType.BTC,
      userId: userId,
      balance: 0,
      coinImage: coinImage.BTC,
      address: btc.status === "fulfilled" ? btc.value.address : "",
    },
    {
      coinName: coinType.USD,
      coinType: coinType.USD,
      userId: userId,
      balance: 0,
      coinImage: coinImage.USD,
      address: "",
      privateKey: "",
    },
  ];
  const walletAdd = await createWallet(addressObj);
};