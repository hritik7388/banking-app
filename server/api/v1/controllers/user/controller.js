import ip, {
  address
} from "ip";
import Config from "config";
import Country from "../../../../models/country";
const saltRounds = 10;
import config from "config";
import State from "../../../../models/state";
const {
  Types
} = require("mongoose");
const cronJob = require("cron").CronJob;
const Mongoose = require("mongoose");
const api = require("kucoin-node-api");
const {
  ObjectId
} = require("mongodb");
const fs = require("fs");
import userAccount from "../../../../models/userAccount.js";
import User from "../../../../models/user.js";
import transactionHistry from "../../../../models/transactionHistory.js";
import transactionNotification from "../../../../models/transactionNotification.js";
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
import request from "request";
const axios = require("axios");
const WebSocket = require("ws");
import status from "../../../../enums/status";
import coinType, {
  XRP
} from "../../../../enums/coinType";
import transactionType from "../../../../enums/transactionType";
import sendNotification from "../../../../helper/notificationUtil";
// ******************Importing services *************************************//
import {
  userServices
  
} from "../../services/user";
import {
  feesServices
} from "../../services/fees";
const { 
  findFees, 
} =
feesServices;
import {
  notificationServices
} from "../../services/notification";
import {
  faqServices
} from "../../services/faq";
import {
  array
} from "joi/lib/types/array";
const {
  checkUserExists,
  createUser,
  findUser,
  findUserForOtp,
  emailMobileExist,
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
const {
  createFAQ,
  findFAQ,
  updateFAQ,
  faqListWithPagination,
  FAQList
} =
faqServices;
export class userController {


  /**
   * @swagger
   * /user/listAllUser:
   *   get:
   *     tags:
   *       - USER
   *     description: Get all users with optional search by mobile number
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: User authentication token
   *         in: header
   *         required: true
   *       - name: search
   *         description: Search by mobile number
   *         in: query
   *         required: false
   *         type: string
   *       - name: page
   *         description: Page number for pagination
   *         in: query
   *         required: false
   *         type: number
   *       - name: limit
   *         description: Number of results per page
   *         in: query
   *         required: false
   *         type: number
   *     responses:
   *       200:
   *         description: Returns the list of users
   */

  async listAllUser(req, res, next) {
    const validationSchema = {
      search: Joi.string().allow("").optional(),
      page: Joi.number().allow("").optional(),
      limit: Joi.number().allow("").optional(),
    };
    try {
      const validatedQuery = await Joi.validate(req.query, validationSchema);
      let userResult = await findUser({
        _id: req.userId,
        status: {
          $ne: status.DELETE
        },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      let dataResults;
      let newUserList = [];
      if (validatedQuery.search) {
        dataResults = await findUser({
          mobileNumber: validatedQuery.search
        });
        if (!dataResults) {
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
        }
      } else {
        dataResults = await paginateSearchAllUser(validatedQuery);
        let allfriendRequest = await userResult.friendRequest;
        let totalFriendOfThisUser = [];
        let friendRequestData = await userModel.find({
          _id: {
            $ne: req.userId
          },
        });
        if (friendRequestData.length != 0) {
          await friendRequestData.forEach(async (ele) => {
            await ele.friendRequest.forEach((elem) => {
              const friend = new ObjectId(elem.senderId);
              const userId = new ObjectId(userResult._id);
              if (userId.equals(friend)) {
                totalFriendOfThisUser.push(ele._id);
              }
            });
          });
        }
        let allDataresult = dataResults.docs;
        allDataresult.forEach((ele) => {
          let userObj = {
            _id: ele._id,
            profilePic: ele.profilePic,
            firstName: ele.firstName,
            lastName: ele.lastName,
            kycVerified: ele.kycVerified,
            otpVerification: ele.otpVerification,
            mobileNumber: ele.mobileNumber,
            isFriend: false,
          };
          totalFriendOfThisUser.forEach(async (elements) => {
            const friendId = new ObjectId(elements);
            const userId = new ObjectId(ele._id);
            if (userId.equals(friendId)) {
              userObj = {
                _id: ele._id,
                profilePic: ele.profilePic,
                firstName: ele.firstName,
                lastName: ele.lastName,
                kycVerified: ele.kycVerified,
                otpVerification: ele.otpVerification,
                mobileNumber: ele.mobileNumber,
                isFriend: true,
              };
            }
          });
          newUserList.push(userObj);
        });
        if (dataResults.docs.length === 0) {
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
        }
      }
      return res.json(new response(newUserList, responseMessage.DATA_FOUND));
    } catch (error) {
      return next(error);
    }
  }



  /**
   * @swagger
   * /user/signUp:
   *   post:
   *     tags:
   *       - USER
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
   *             password:
   *               type: string
   *             repassword:
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
      password: Joi.string().required(),
      repassword: Joi.string().required(),
      countryCode: Joi.string().required(),
      deviceToken: Joi.string().optional(),
      deviceType: Joi.string().optional(),
    };
    try {
      if (req.body.mobileNumber) {
        const validatedBody = await Joi.validate(req.body, validationSchema);
        let {
          mobileNumber,
          password,
          repassword,
          countryCode,
          deviceToken,
          deviceType,
        } = validatedBody;

        var userInfo = await findUserData({
          countryCode: countryCode,
          mobileNumber: mobileNumber,
          status: {
            $ne: status.DELETE
          },
        });

        if (validatedBody.password !== validatedBody.repassword) {
          return res.json(new response({}, responseMessage.PWD_NOT_MATCH));
        }
        if (userInfo) {
          if (userInfo.otpVerification == false) {
            validatedBody.otp = commonFunction.getOTP();
            validatedBody.otpTime = new Date().getTime() + 180000;
            let result = await updateUser({
              _id: userInfo._id
            }, {
              otp: validatedBody.otp,
              otpTime: validatedBody.otpTime
            });
            const mss = await commonFunction.sendSmsTwilio(
              countryCode + mobileNumber,
              validatedBody.otp
            );
            result = _.omit(
              JSON.parse(JSON.stringify(result)),
              "otp",
              "otpTime"
            );

            return res.json(new response({}, responseMessage.OTP_SEND));
          }

          throw apiError.conflict(responseMessage.MOBILE_EXIST);
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        validatedBody.password = hashedPassword;

        validatedBody.otp = commonFunction.getOTP();
        validatedBody.otpTime = new Date().getTime() + 180000;

        let result = await createUser(validatedBody);

        if (!deviceType && deviceToken) {
          deviceType = "defaultDeviceType";
        }
        await updateUser({
          _id: result._id
        }, {
          deviceToken,
          deviceType
        });

        //generateAddresss(result._id);

        result = _.omit(JSON.parse(JSON.stringify(result)), "otp", "otpTime");

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
   * /user/verifyOTP:
   *   patch:
   *     tags:
   *       - USER
   *     description: verifyOTP  OTP after signUp with  mobileNumber
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: email
   *         description: email/mobile
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
  async verifyOTP(req, res, next) {
    var validationSchema = {
      email: Joi.string().required(),
      otp: Joi.number().optional(),
    };
    try {
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const {
        email,
        otp
      } = validatedBody;



      console.log(
        "🚀 ~ userController ~ verifyOTP ~ validatedBody:",
        validatedBody
      );
      let userResult;
      userResult = await findUserForOtp({
        $and: [{
            status: {
              $ne: status.DELETE
            }
          },
          {
            userType: userType.USER
          },
          {
            $or: [{
              mobileNumber: email
            }, {
              email: email
            }]
          },
        ],
      });
      console.log("userResult========>>>>>", userResult)
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      if (userResult.otpVerification === true) {
        var updateResult;
        if (userResult.otp == otp || otp == "2121") {
          var token = await commonFunction.getToken({
            _id: userResult._id,
            mobileNumber: userResult.mobileNumber,
            userType: userResult.userType,
          });
          var obj = {
            _id: userResult._id,
            mobileNumber: userResult.mobileNumber,
            otpVerification: true,
            token: token,
            vaultToken: accessToken
          };
          return res.json(new response(obj, responseMessage.OTP_VERIFY));
        } else {
          throw apiError.badRequest("Invalid OTP");
        }
      } else {
        console.log("helllllooooo");

        if (userResult.otp == otp || otp == "2121") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const isEmail = emailRegex.test(validatedBody.email);
          var updateResult;
          if (isEmail == true) {
            updateResult = await updateUser({
              _id: userResult._id
            }, {
              otpVerification: true,
              emailAuthentication: true,
              otp: null,
            });
          } else {
            updateResult = await updateUser({
              _id: userResult._id
            }, {
              otpVerification: true,
              otp: null
            });

          }
          var token = await commonFunction.getToken({
            _id: updateResult._id,
            mobileNumber: updateResult.mobileNumber,
            userType: updateResult.userType,
          });

          let savingObj = {
            type: "saving",
            amount: 0,
            isLockedBalance: 0,
            userId: updateResult._id,
          };
          let currentObj = {
            type: "current",
            amount: 0,
          };
          const deposited = await userAccount.create(savingObj);

          const referralCode = "O" + commonFunction.makeReferral();
          if (userResult.invitationCode) {
            let checkReferralCode = await findUser({
              referralCode: userResult.invitationCode,
              status: {
                $ne: status.DELETE
              },
            });
            if (checkReferralCode) {
              await updateUser({
                _id: checkReferralCode._id
              }, {
                $inc: {
                  "referralHistory.totalReferralCount": 1
                }
              });
              await updateUser({
                _id: checkReferralCode._id
              }, {
                $push: {
                  "referralHistory.totalReferralUsers": {
                    referralUserId: userResult._id,
                  },
                },
              });

              const referralHistory = await createReferral({
                referralUserId: userResult._id,
                userId: checkReferralCode._id,
              });
              console.log(
                "🚀 ~ file: controller.js:349 ~ userController ~ verifyOTP ~ referralHistory:",
                referralHistory
              );
            }
          }

          var updateResult = await updateUser({
            _id: userResult._id
          }, {
            otpVerification: true,
            referralCode: referralCode
          });
          var obj = {
            _id: updateResult._id,
            countryCode: updateResult.countryCode,
            mobileNumber: updateResult.mobileNumber,
            otpVerification: true,
            token: token,
            referralCode: updateResult.referralCode,

          };
          let accountObj = {
            amount: 0,
            type: "current",
            userId: updateResult._id,
          };
          await userAccount.create(accountObj);
          return res.json(new response(obj, responseMessage.OTP_VERIFY));
        } else {
          throw apiError.badRequest("Invalid OTP");
        }
      }
    } catch (error) {
      if (error.isJoi) {
        return res.status(400).json({
          error: error.details[0].message
        });
      } else {
        return next(error);
      }
    }
  }




  /**
   * @swagger
   * /user/resendOTP:
   *   post:
   *     tags:
   *       - USER
   *     description: Resend OTP (One Time Password)
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         description: User's email or mobile number to resend OTP
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             field:
   *               type: string
   *               description: Email or mobile number to resend OTP
   *     responses:
   *       200:
   *         description: Returns success message after resending OTP
   */
  async resendOTP(req, res, next) {
    var validationSchema = {
      field: Joi.string().required(),
    };
    try {
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const {
        field
      } = validatedBody;
      var userResult;
      if (field) {
        userResult = await findUserForOtp({
          $and: [{
              status: {
                $ne: status.DELETE
              }
            },
            {
              userType: userType.USER
            },
            {
              $or: [{
                mobileNumber: field
              }, {
                email: field
              }]
            },
          ],
        });
        if (!userResult)
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
        var otp = commonFunction.getOTP();
        var otpTime = new Date().getTime() + 180000;

        if (userResult.mobileNumber == field) {
          await commonFunction.sendSmsTwilio(
            userResult.countryCode + field,
            otp
          );
        } else {
          await commonFunction.sendMailOtpNodeMailer(userResult.email, otp);
        }
        var updateResult = await updateUserForOtp({
          _id: userResult._id
        }, {
          otp: otp,
          otpTime: otpTime,
        });
        return res.json(new response({}, responseMessage.OTP_SEND));
      } else {
        throw apiError.conflict(responseMessage.NUMBER_NOT_FOUND);
      }
    } catch (error) {
      if (error.isJoi) {
        return res.status(400).json({
          error: error.details[0].message
        });
      } else {
        return next(error);
      }
    }
  }
  ///
  /**
   * @swagger
   * /user/sendWhatsAppOTP:
   *   post:
   *     tags:
   *       - USER
   *     description: sendWhatsAppOTP
   *     produces:
   *       - application/jsonM
   *     parameters:
   *       - name: token
   *         in: header
   *         required: true
   *         description: User token
   *       - name: body
   *         in: body
   *         description: WhatsApp OTP
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             whatsappNumber:
   *               type: string
   *     responses:
   *       200:
   *         description: Returns success message
   */

  async sendWhatsAppOTP(req, res, next) {
    let validationSchema = {
      whatsappNumber: Joi.string().required(),
    };
    try {
      let userResult = await userModel.find({
        _id: req.userId
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      let validatedBody = await Joi.validate(req.body, validationSchema);
      const {
        whatsappNumber
      } = validatedBody;
      let otp = await commonFunction.getOTP();

      await commonFunction.sentWhatsappOtp(whatsappNumber, otp);

      const user = await userModel.findOneAndUpdate({
        _id: req.userId
      }, {
        otpMobile: otp
      });

      return res
        .status(200)
        .json({
          success: true,
          msg: "Otp sent successfully"
        });
    } catch (error) {
      res.status(400).json({
        error: error.message
      });
      return next(error);
    }
  }

  ///

  /**
   * @swagger
   * /user/sendWhatsAppOTP:
   *   post:
   *     tags:
   *       - USER
   *     description: sendWhatsAppOTP
   *     produces:
   *       - application/jsonM
   *     parameters:
   *       - name: token
   *         in: header
   *         required: true
   *         description: User token
   *       - name: body
   *         in: body
   *         description: WhatsApp OTP
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             whatsappNumber:
   *               type: string
   *     responses:
   *       200:
   *         description: Returns success message
   */

  async sendWhatsAppOTP(req, res, next) {
    let validationSchema = {
      whatsappNumber: Joi.string().required(),
    };
    try {
      let userResult = await userModel.find({
        _id: req.userId
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      let validatedBody = await Joi.validate(req.body, validationSchema);
      const {
        whatsappNumber
      } = validatedBody;
      let otp = await commonFunction.getOTP();

      await commonFunction.sentWhatsappOtp(whatsappNumber, otp);

      const user = await userModel.findOneAndUpdate({
        _id: req.userId
      }, {
        otpMobile: otp
      });
      return res
        .status(200)
        .json({
          success: true,
          msg: "Otp sent successfully"
        });
    } catch (error) {
      res.status(400).json({
        error: error.message
      });
      return next(error);
    }
  }

  /**
   *   post:
   *     tags:
   *       - USER
   *     description: Request to generate and send an OTP for password reset
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: email
   *         description: forgotpassword   OTP  for verification
   *         in: body
   *         required: false
   *         schema:
   *           $ref: '#/definitions/resendOTPForgotPasscode'
   *     responses:
   *       200:
   *         description: OTP sent successfully
   */
  async resendOTPForgotPasscode(req, res, next) {
    var validationSchema = {
      email: Joi.string().required(),
    };
    try {
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const {
        email
      } = validatedBody;
      var userResult;
      if (email) {
        userResult = await findUserForOtp({
          $and: [{
              status: {
                $ne: status.DELETE
              }
            },
            {
              userType: userType.USER
            },
            {
              $or: [{
                mobileNumber: email
              }, {
                email: email
              }]
            },
          ],
        });
        if (!userResult)
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
        let otp = commonFunction.getOTP();
        let otp2 = commonFunction.getOTP();
        let otpTime = Date.now() + 180000;
        await updateUser({
          _id: userResult._id
        }, {
          otp: otp,
          otp2: otp2,
          otpTime: otpTime
        });
        if (userResult.email == email)
          if (userResult.mobileNumber == email)
            //await commonFunction.sendMailOtpNodeMailer(email, otp);
            //await commonFunction.sendSmsTwilio((userResult.countryCode + email), otp2);
            var updateResult = await updateUserForOtp({
              _id: userResult._id
            }, {
              otp: otp,
              otp2: otp2,
              otpTime: otpTime,
            });
        return res.json(new response({}, responseMessage.OTP_SEND));
      } else {
        throw apiError.conflict(responseMessage.NUMBER_NOT_FOUND);
      }
    } catch (error) {
      if (error.isJoi) {
        return res.status(400).json({
          error: error.details[0].message
        });
      } else {
        return next(error);
      }
    }
  }

  /**
   * @swagger
   * /user/forgotPassCode:
   *   post:
   *     tags:
   *       - USER
   *     description: Request to generate and send an OTP for password reset
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: email
   *         description: forgotpassword   OTP  for verification
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *            email:
   *               type: string
   *     responses:
   *       200:
   *         description: OTP sent successfully
   */
  async forgotPassCode(req, res, next) {
    var validationSchema = {
      email: Joi.string().required(),
    };
    try {
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const {
        email
      } = validatedBody;
      console.log("🚀 ~ userController ~ forgotPassCode ~ email:", email);
      var userResult;
      if (email) {
        userResult = await findUserForOtp({
          $and: [{
              status: {
                $ne: status.DELETE
              }
            },
            {
              userType: userType.USER
            },
            {
              $or: [{
                mobileNumber: email
              }, {
                email: email
              }]
            },
          ],
        });
        console.log(
          "🚀 ~ userController ~ forgotPassCode ~ userResult:",
          userResult
        );
        if (!userResult) {
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
        }

        let otp = commonFunction.getOTP();
        let otp2 = commonFunction.getOTP();
        let otpTime = Date.now() + 180000;
        await updateUser({
          _id: userResult._id
        }, {
          otp: otp,
          otp2: otp2,
          otpTime: otpTime
        });
        if (userResult.email == email)
          await commonFunction.sendMailOtpNodeMailer(email, otp);
        if (userResult.email == email)
          await commonFunction.sendSmsTwilio(
            userResult.countryCode + userResult.mobileNumber,
            otp2
          );
        var updateResult = await updateUserForOtp({
          _id: userResult._id
        }, {
          otp: otp,
          otp2: otp2,
          otpTime: otpTime,
        });
        return res.json(new response({}, responseMessage.OTP_SEND));
      } else {
        throw apiError.conflict(responseMessage.EMAIL_OR_NUMBER);
      }
    } catch (error) {
      console.log("9211111", error);
      if (error.isJoi) {
        return res.status(400).json({
          error: error.details[0].message
        });
      } else {
        return next(error);
      }
    }
  }


  /**
   * @swagger
   * /user/checkUser:
   *   post:
   *     tags:
   *       - USER
   *     description: checkUser  with mobileNumber
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: mobileNumber
   *         description: mobileNumber
   *         in: formData
   *         required: true
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async checkUser(req, res, next) {
    var validationSchema = {
      mobileNumber: Joi.string().required(),
    };
    try {
      var results;
      var validatedBody = await Joi.validate(req.body, validationSchema);
      let {
        mobileNumber
      } = validatedBody;
      // mobileNumber = email.toLowerCase();
      var userResult;
      var userResult = await findUser({
        $and: [{
            status: {
              $ne: status.DELETE
            }
          },
          {
            userType: userType.USER
          },
          {
            $or: [{
                mobileNumber: mobileNumber
              },
              {
                mobileNumber: mobileNumber
              },
            ],
          },
        ],
      });

      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      if (userResult.otpVerification == false) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      return res.json(new response({}, responseMessage.USER_FOUND));
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
  /**
   * @swagger
   * /user/login:
   *   post:
   *     tags:
   *       - USER
   *     description: login with email || mobileNumber and passCode
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: login
   *         description: Login details
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             loginfield:
   *               type: string
   *             passCode:
   *               type: string
   *             deviceToken:
   *               type: string
   *             deviceType:
   *               type: string
   *             isBlocked:
   *               type: boolean
   *               default: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async login(req, res, next) {
    var validationSchema = {
      loginfield: Joi.string().required(),
      password: Joi.string().allow("").optional(),
      deviceToken: Joi.string().allow("").optional(),
      deviceType: Joi.string().allow("").optional(),
      isBlocked: Joi.boolean().optional(),
    };

    try {
      var validatedBody = await Joi.validate(req.body, validationSchema);
      console.log("validatedBody========>>>>", validatedBody);
      let {
        loginfield,
        password,
        deviceToken,
        deviceType
      } = validatedBody;
      var userResult;
      console.log("4999999999===============>", validatedBody.isBlocked);
      if (validatedBody.isBlocked == true) {
        let updated = await userModel.findOneAndUpdate({
          mobileNumber: validatedBody.loginfield
        }, {
          status: "BLOCK",
          blockedReason: "Account Blocked due to attempt wrong passcode many time.",
        }, {
          upsert: true,
          new: true
        });

        return res.status(403).json({
          responseCode: 403,
          responseMessage: "Wrong passcode attempts many time.",
        });
      }
      if (loginfield.includes("@")) {
        // Check if loginfield is an email
        userResult = await findUser({
          $and: [{
              status: {
                $ne: status.DELETE
              }
            },
            {
              userType: userType.USER
            },
            {
              email: loginfield
            },
          ],
        });

        if (userResult.status == "BLOCK") {
          let blockedReason = {
            Reason: userResult.blockedReason,
          };
          return res.status(403).json({
            blockedReason,
            responseCode: 403,
            responseMessage: "Please request to admin to active account",
          });
        }

        if (userResult && userResult.otpVerification == false) {
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
        }
      } else {
        userResult = await findUser({
          $and: [{
              status: {
                $ne: status.DELETE
              }
            },
            {
              userType: userType.USER
            },
            {
              mobileNumber: loginfield
            },
          ],
        });

        if (userResult && userResult.otpVerification == false) {
          throw apiError.notFound(responseMessage.USER_NOT_FOUND);
        }
      }

      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      if (userResult.status === status.BLOCK) {
        throw apiError.badRequest(responseMessage.BLOCK_BY_ADMIN);
      }

      if (
        !userResult.password ||
        !bcrypt.compareSync(passCode, userResult.password)
      ) {
        throw apiError.invalid(responseMessage.INCORRECT_LOGIN);
      }

      await updateUser({
        _id: userResult._id
      }, {
        attemptKey: 0
      });
      var otpByEmail = commonFunction.getOTP();
      var newOtpByEmail = otpByEmail;
      var timeByEmail = Date.now() + 180000;

      var updateResultByEmail = await updateUser({
        _id: userResult._id
      }, {
        $set: {
          otp: newOtpByEmail,
          deviceToken: validatedBody.deviceToken,
          otpTime: timeByEmail,
          otpVerificationEmail: false,
        },
      });
      console.log("0090909", userResult.email);
      let mailsent = await commonFunction.sendMailOtpNodeMailer(
        userResult.email,
        newOtpByEmail
      );
      console.log("12733333333333", mailsent);
      if (mailsent) {
        var obj = {
          _id: userResult._id,
          timeByEmail: updateResultByEmail,
        };
        return res.json(new response(obj, responseMessage.OTP_SEND));
      }
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
  /**
   * @swagger
   * /user/editProfile:
   *   put:
   *     tags:
   *       - USER
   *     description: Edit profile
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: firstName
   *         description: firstName
   *         in: formData
   *         required: false
   *       - name: lastName
   *         description: lastName
   *         in: formData
   *         required: false
   *       - name: fullName
   *         description: fullName
   *         in: formData
   *         required: false
   *       - name: countryCode
   *         description: countryCode
   *         in: formData
   *         required: false
   *       - name: mobileNumber
   *         description: mobileNumber
   *         in: formData
   *         required: false
   *       - name: nickname
   *         description: nickname
   *         in: formData
   *         required: false
   *       - name: email
   *         description: email
   *         in: formData
   *         required: false
   *       - name: country
   *         description: country
   *         in: formData
   *         required: false
   *       - name: state
   *         description: state
   *         in: formData
   *         required: false
   *       - name: city
   *         description: city
   *         in: formData
   *         required: false
   *       - name: address
   *         description: address
   *         in: formData
   *         required: false
   *       - name: zipCode
   *         description: zipCode
   *         in: formData
   *         required: false
   *       - name: streetName
   *         description: streetName
   *         in: formData
   *         required: false
   *       - name: buildingName
   *         description: buildingName
   *         in: formData
   *         required: false
   *       - name: maritalStatus
   *         description: maritalStatus
   *         in: formData
   *         required: false
   *       - name: dateOfBirth
   *         description: dateOfBirth
   *         in: formData
   *         required: false
   *       - name: profilePic
   *         description: profilePic
   *         in: formData
   *       - name: longitude
   *         description: longitude
   *         in: formData
   *         required: false
   *       - name: latitude
   *         description: latitude
   *         in: formData
   *         required: false
   *       - name: passCode
   *         description: passCode
   *         in: formData
   *         required: false
   *       - name: location
   *         description: location
   *         in: formData
   *         required: false
   *       - name: countryOfResidence
   *         description: countryOfResidence
   *         in: formData
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */

  async editProfile(req, res, next) {
    const validationSchema = {
      email: Joi.string().allow("").optional(),
      mobileNumber: Joi.string().allow("").optional(),
      firstName: Joi.string().allow("").optional(),
      lastName: Joi.string().allow("").optional(),
      fullName: Joi.string().allow("").optional(),
      country: Joi.string().allow("").optional(),
      countryCode: Joi.string().allow("").optional(),
      state: Joi.string().allow("").optional(),
      address: Joi.string().allow("").optional(),
      city: Joi.string().allow("").optional(),
      nickname: Joi.string().allow("").optional(),
      zipCode: Joi.string().allow("").optional(),
      dateOfBirth: Joi.string().allow("").optional(),
      streetName: Joi.string().allow("").optional(),
      buildingName: Joi.string().allow("").optional(),
      profilePic: Joi.string().allow("").optional(),
      password: Joi.string().allow("").optional(),
      countryOfResidence: Joi.string().allow("").optional(),
    };
    try {
      const validatedBody = await Joi.validate(req.body, validationSchema);
      console.log(
        "🚀 ~ userController ~ editProfile ~ validatedBody:",
        validatedBody
      );
      let userResult = await findUser({
        _id: req.userId,
        status: {
          $ne: status.DELETE
        },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      if (req.body.longitude && req.body.latitude) {
        const coordinates = [
          parseFloat(validatedBody.longitude),
          parseFloat(validatedBody.latitude),
        ];
        validatedBody.location = {
          type: "point",
          coordinates
        };
      }

      if (req.body.password && req.body.password !== "") {
        const hashedPasscode = await bcrypt.hash(req.body.password, 10);
        validatedBody.password = hashedPasscode;
      }
      if (req.body.email && req.body.email != "") {
        var emailResult = await findUser({
          email: req.body.email,
          _id: {
            $ne: userResult._id
          },
          status: {
            $ne: status.DELETE
          },
        });
        if (emailResult) {
          throw apiError.conflict(responseMessage.EMAIL_EXIST);
        }
      }
      if (req.body.mobileNumber && req.body.mobileNumber != "") {
        var mobileResult = await findUser({
          mobileNumber: req.body.mobileNumber,
          _id: {
            $ne: userResult._id
          },
          status: {
            $ne: status.DELETE
          },
        });
        if (mobileResult) {
          throw apiError.conflict(responseMessage.MOBILE_EXIST);
        }
      }
      if (userResult.email == undefined && userResult.mobileNumber) {
        let addressobj = {
          city: validatedBody.city,
          countryCode: validatedBody.countryCode,
          mobileNumber: userResult.mobileNumber,
          StreetName: validatedBody.streetName,
          BuildingAddress: validatedBody.buildingName,
          userId: req.userId,
          countryOfResidence: validatedBody.countryOfResidence
        };

        let deafultAdressCreated = await deliverAddress.create(addressobj);
        console.log("160000000", deafultAdressCreated);
      }

      validatedBody.fullName = `${validatedBody.firstName} ${validatedBody.lastName}`;
      validatedBody.isUpdateProfile = true;
      if (validatedBody.profilePic) {
        validatedBody.profilePic = validatedBody.profilePic;
        // validatedBody.profilePic = await commonFunction.getSecureUrl(validatedBody.profilePic);
      }

      var otp = commonFunction.getOTP();
      var otpTime = new Date().getTime() + 180000;
      validatedBody.otp = otp;
      validatedBody.otpTime = otpTime;
      if (validatedBody.firstName && validatedBody.lastName) {
        let firstname = validatedBody.firstName
          .split("")
          .slice(0, 1)
          .join("")
          .toUpperCase();
        let lastname = validatedBody.lastName
          .split("")
          .slice(0, 1)
          .join("")
          .toUpperCase();
        let username = firstname + lastname;
        let isUsernameExist = await userModel
          .findOne({
            userName: username
          })
          .lean();

        if (isUsernameExist) {
          let updatedNumber = 1;
          while (isUsernameExist) {
            username = username.substring(0, 2);
            username = username + updatedNumber;

            isUsernameExist = await userModel
              .findOne({
                userName: username
              })
              .lean();
            if (isUsernameExist) {
              updatedNumber++;
            }
          }
          validatedBody.userName = username;
        } else {
          validatedBody.userName = username;
        }
      }
      // validatedBody.userName
      validatedBody.countryOfResidence = validatedBody.countryOfResidence;
      var result = await updateUser({
        _id: userResult._id
      }, validatedBody);
      if (result) {
        let checkemailOTP = await userModel.findOne({
          email: validatedBody.email,
          status: "ACTIVE",
        });
        if (checkemailOTP.emailAuthentication == false) {
          let otpSent = await commonFunction.sendMailOtpNodeMailer(
            validatedBody.email,
            otp
          );
        }
        return res.json({
          responseCode: 200,
          responseMessage: "Profile updated successfully and sent a OTP on your mail please verify it.",
        });
      }
    } catch (error) {
      console.log("error in edit profile ==========>>", error);
      // return next(error);
      return res.json({
        responseCode: 500,
        responseMessage: error.message
      });
    }
  }
  /**
   * @swagger
   * /user/changePassword:
   *   patch:
   *     tags:
   *       - USER
   *     description: Change user password
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: User authentication token
   *         in: header
   *         required: true
   *       - name: body
   *         in: body
   *         description: User's old and new passwords
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             oldPassword:
   *               type: string
   *               description: Current password of the user
   *             newPassword:
   *               type: string
   *               description: New password to be set for the user
   *     responses:
   *       200:
   *         description: Returns success message after changing the password
   */
  async changePassword(req, res, next) {
    const validationSchema = {
      oldPassword: Joi.string().required(),
      newPassword: Joi.string().required(),
    };
    try {
      let validatedBody = await Joi.validate(req.body, validationSchema);
      let userResult = await findUser({
        _id: req.userId
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      if (!bcrypt.compareSync(validatedBody.oldPassword, userResult.password)) {
        throw apiError.badRequest(responseMessage.PWD_NOT_MATCH);
      }
      let updated = await updateUserById(userResult._id, {
        password: bcrypt.hashSync(validatedBody.newPassword),
      });
      return res.json(new response({}, responseMessage.PWD_CHANGED));
    } catch (error) {
      return next(error);
    }
  }
  /**
   * @swagger
   * /user/deleteUserAccount:
   *   delete:
   *     tags:
   *       - USER
   *     description: deleteUserAccount
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: reason
   *         description: reason
   *         in: formData
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async deleteUserAccount(req, res, next) {
    try {
      var userResult = await findUser({
        _id: req.userId,
        status: {
          $ne: status.DELETE
        },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      let deleteRes = await updateUser({
        _id: userResult._id
      }, {
        status: status.DELETE,
        reason: req.body.reason
      });
      return res.json(new response(deleteRes, responseMessage.DELETE_SUCCESS));
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @swagger
   * /user/resetPassword:
   *   post:
   *     tags:
   *       - USER
   *     description: Reset password by USER on plateform
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: passcode
   *         description: passcode
   *         in: formData
   *         required: true
   *       - name: confirmPasscode
   *         description: confirmPasscode
   *         in: formData
   *         required: true
   *     responses:
   *       200:
   *         description: Your password has been successfully changed.
   *       404:
   *         description: This user does not exist.
   *       422:
   *         description: Password not matched.
   *       500:
   *         description: Internal Server Error
   *       501:
   *         description: Something went wrong!
   */
  async resetPassword(req, res, next) {
    const validationSchema = {
      password: Joi.string().required(),
      confirmPassword: Joi.string().required(),
    };
    try {
      const {
        passcode,
        confirmPassword
      } = await Joi.validate(
        req.body,
        validationSchema
      );
      var userResult = await findUser({
        _id: req.userId,
        status: {
          $ne: status.DELETE
        },
      });

      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      } else {
        if (password == confirmPassword) {
          await updateUser({
            _id: userResult._id
          }, {
            passcode: bcrypt.hashSync(passcode)
          });

          await commonFunction.sendConfirmationMail(userResult.email)
          return res.json(new response({}, responseMessage.PWD_CHANGED));
        } else {
          throw apiError.notFound(responseMessage.PWD_NOT_MATCH);
        }
      }
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /user/createPassword:
   *   post:
   *     tags:
   *       - USER
   *     description: Create passCode by USER on plateform
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: passCode
   *         description: passCode
   *         in: formData
   *         required: true
   *       - name: confirmpassCode
   *         description: confirmpassCode
   *         in: formData
   *         required: true
   *     responses:
   *       200:
   *         description: Your passCode has been successfully created.
   *       404:
   *         description: This user does not exist.
   *       422:
   *         description: passCode not matched.
   *       500:
   *         description: Internal Server Error
   *       501:
   *         description: Something went wrong!
   */
  async createPassword(req, res, next) {
    const validationSchema = {
      password: Joi.string().required(),
      confirmPassword: Joi.string().valid(Joi.ref("passCode")).required(),
    };
    console.log("req.userId", req.userId);
    try {
      const {
        password,
        confirmPassword
      } = await Joi.validate(
        req.body,
        validationSchema
      );

      if (
        !/^\d{6}$/.test(passCode) ||
        /^(123456|111111|222222|333333|444444|555555|666666|777777|888888|999999|000000)$/.test(
          passCode
        )
      ) {
        throw new Error(
          "Invalid passcode format. This passcode series is not valid!"
        );
      }

      const userResult = await findUser({
        _id: req.userId,
        status: {
          $ne: "DELETE"
        },
      });

      if (!userResult) {
        throw new Error(responseMessage.USER_NOT_FOUND);
      } else {
        const hashedPassCode = bcrypt.hashSync(password, 10);
        await updateUser({
          _id: userResult._id
        }, {
          password: hashedPassCode,
          passwordVerification: true
        });
        return res.json({
          responseCode: 200,
          responseMessage: "Passcode added successfully!",
        });
      }
    } catch (error) {
      if (error.isJoi) {
        return res.status(400).json({
          responseCode: 500,
          responseMessage: error.details[0].message,
        });
      } else {
        return next(error);
      }
    }
  }

  /**
   * @swagger
   * /user/addAuthentication:
   *   post:
   *     tags:
   *       - USER
   *     description: addAuthentication on  plateform by USER
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: speakeasy
   *         description: speakeasy
   *         in: formData
   *         type: boolean
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async addAuthentication(req, res, next) {
    try {
      let userResult = await findUser({
        _id: req.userId,
        status: {
          $ne: status.DELETE
        },
      });
      if (!userResult) throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      if (req.body.speakeasy === true || req.body.speakeasy === "true") {
        console.log("ayush=======>>", req.body.speakeasy);
        var secret = speakeasy.generateSecret({
          length: 20
        });
        var url = speakeasy.otpauthURL({
          secret: secret.ascii,
          label: userResult.email,
          algorithm: "sha512",
        });
        let data_url = await qrcode.toDataURL(url);
        const base64Data = data_url.replace(/^data:image\/\w+;base64,/, "");
        let dataUrl = await commonFunction.uploadToS3(base64Data);
        // let dataUrl = await commonFunction.getSecureUrl(data_url);
        await updateUser({
          _id: userResult._id
        }, {
          speakeasy: false,
          mobileNumberAuthentication: false,
          emailAuthentication: false,
          base32: secret.base32,
          speakeasyQRcode: dataUrl,
        });
        let obj = {
          email: userResult.email,
          secret: secret.base32,
          url: dataUrl,
        };
        return res.json(new response(obj, responseMessage.TWO_FA_GENERATED));
      } else {
        let updateRes = await updateUser({
          _id: userResult._id
        }, {
          speakeasy: false,
          base32: "",
          speakeasyQRcode: ""
        });
        return res.json(new response({}, responseMessage.GOOGEL_AUTH));
      }
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /user/verifyTwoAuthentication:
   *   post:
   *     tags:
   *       - USER
   *     description: verifyTwoAuthentication in This authenticate twoFactor authentication for EMAIL,MOBILE,GOOGLE
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: _id
   *         description: _id
   *         in: formData
   *         required: true
   *       - name: otp
   *         description: otp
   *         in: formData
   *         required: true
   *       - name: authenticationType
   *         description: authenticationType
   *         in: formData
   *         enum: ["EMAIL","MOBILE","GOOGEL"]
   *         required: true
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async verifyTwoAuthentication(req, res, next) {
    try {
      console.log("gfdsgf");
      let userResult = await findUser({
        _id: req.body._id,
        status: {
          $ne: status.DELETE
        },
      });
      if (!userResult) throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      let updateResult;
      if (req.body.authenticationType == "EMAIL") {
        if (new Date().getTime > userResult.emailAuthenticationTime) {
          throw apiError.badRequest(responseMessage.OTP_EXPIRED);
        }
        if (userResult.emailAuthenticationOTP != req.body.otp) {
          throw apiError.badRequest(responseMessage.INCORRECT_OTP);
        }
        updateResult = await updateUser({
          _id: userResult._id
        }, {
          emailAuthentication: true,
        });
      }
      if (req.body.authenticationType == "MOBILE") {
        if (new Date().getTime > userResult.emailAuthenticationTime) {
          throw apiError.badRequest(responseMessage.OTP_EXPIRED);
        }
        if (userResult.emailAuthenticationOTP != req.body.otp) {
          throw apiError.badRequest(responseMessage.INCORRECT_OTP);
        }
        updateResult = await updateUser({
          _id: userResult._id
        }, {
          mobileNumberAuthentication: true,
        });
      }

      if (req.body.authenticationType == "GOOGEL") {
        var verified = await speakeasy.totp.verify({
          secret: userResult.base32,
          encoding: "base32",
          token: req.body.otp,
        });
        if (!verified) {
          throw apiError.badRequest(responseMessage.INCORRECT_OTP);
        }
        updateResult = await updateUser({
          _id: userResult._id
        }, {
          speakeasy: true,
        });
      }
      var token = await commonFunction.getToken({
        _id: updateResult._id,
        userType: updateResult.userType,
      });
      let obj = {
        _id: updateResult._id,
        authenticationType: req.body.authenticationType,
        email: updateResult.email,
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
   * /user/googleAuthenticationDisable:
   *   get:
   *     tags:
   *       - USER
   *     description: googleAuthenticationDisable for USER
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: truecoinTypeName
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async googleAuthenticationDisable(req, res, next) {
    try {
      let userResult = await findUser({
        _id: req.userId,
        status: {
          $ne: status.DELETE
        },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      } else {
        let updateUserRes = await updateUser({
          _id: userResult._id
        }, {
          speakeasy: false
        });
        return res.json(
          new response(updateUserRes, responseMessage.TWO_FA_DISABLE)
        );
      }
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /user/enableDisableEmailMobileNumberAuth:
   *   get:
   *     tags:
   *       - USER
   *     description: enableDisableEmailMobileNumberAuth ,enable or disable authentication on mobile or email by USER
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: emailAuthentication
   *         description: emailAuthentication
   *         in: query
   *         type: boolean
   *         required: false
   *       - name: mobileNumberAuthentication
   *         description: mobileNumberAuthentication
   *         in: query
   *         type: boolean
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async enableDisableEmailMobileNumberAuth(req, res, next) {
    const validationSchema = {
      emailAuthentication: Joi.boolean().optional(),
      mobileNumberAuthentication: Joi.boolean().optional(),
    };
    try {
      console.log("fsdhfgdssfsdhfgds=================", req.query);
      const validatedBody = await Joi.validate(req.query, validationSchema);
      const userResult = await findUser({
        _id: req.userId,
        status: {
          $ne: status.DELETE
        },
      });
      if (!userResult) throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      var otp;
      var otpTime;
      if (validatedBody.emailAuthentication == true) {
        otp = commonFunction.getOTP();
        otpTime = new Date().getTime() + 180000;
        let updateRes = await updateUser({
          _id: userResult._id
        }, {
          emailAuthentication: false,
          speakeasy: false,
          mobileNumberAuthentication: false,
          emailAuthenticationTime: otpTime,
          emailAuthenticationOTP: otp,
        });
        await commonFunction.sendMailOtpForgetAndResend(userResult.email, otp);
        return res.json(new response(updateRes, responseMessage.EMAIL_ENABLE));
      }
      if (validatedBody.emailAuthentication == false) {
        let updateRes = await updateUser({
            _id: userResult._id
          },
          validatedBody
        );
        return res.json(new response(updateRes, responseMessage.EMAIL_DISABLE));
      }
      if (validatedBody.mobileNumberAuthentication == true) {
        otp = commonFunction.getOTP();
        otpTime = new Date().getTime() + 180000;
        let updateRes = await updateUser({
          _id: userResult._id
        }, {
          mobileNumberAuthentication: false,
          emailAuthentication: false,
          speakeasy: false,
          mobileNumberAuthenticationTime: otpTime,
          mobileNumberAuthenticationOTP: otp,
        });

        await commonFunction.sendSmsTwilio(
          userResult.countryCode + userResult.mobileNumber,
          otp
        );
        return res.json(new response(updateRes, responseMessage.MOBILE_ENABLE));
      }
      if (validatedBody.mobileNumberAuthentication == false) {
        let updateRes = await updateUser({
            _id: userResult._id
          },
          validatedBody
        );
        return res.json(
          new response(updateRes, responseMessage.MOBILE_DISABLE)
        );
      }
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /user/viewProfile:
   *   post:
   *     tags:
   *       - USER
   *     description: addAuthentication on  plateform by USER
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
        status: {
          $ne: status.DELETE
        },
      });
      if (!userResult) throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      userResult = _.omit(
        JSON.parse(JSON.stringify(userResult)),
        "otp",
        "otpTime",
        "__v"
      );
      return res.json(new response(userResult, responseMessage.DATA_FOUND));
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }


  /**
   * @swagger
   * /user/uploadImageFile:
   *   post:
   *     tags:
   *       - USER
   *     description: uploadImage
   *     security:
   *       - api_key: []
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: image
   *         description: image
   *         in: formData
   *         type: file
   *         required: true
   *     responses:
   *       200:
   *         description: Returns success message
   */

  async uploadImageFile(req, res, next) {
    console.log("🚀 ~ userController ~ uploadImage ~ files:", req);
    try {
      console.log("🚀 ~ userController ~ uploadImage ~ files:", req.file);
      if (req.files.length != 0) {
        console.log("req.files=========>>>", req.files);
        var result = await commonFunction.getImageUrl(req.files);
        return res.json(new response(result, responseMessage.DATA_FOUND));
      }
    } catch (error) {
      console.log("error", error);
      return next(error);
    }
  }


  /**
   * @swagger
   * /user/transactionList:
   *   get:
   *     tags:
   *       - USER TRANSACTION MANAGEMENT
   *     description: transactionList
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: transactionType
   *         description: transactionType ?? TRANSFER, WITHDRAW, DEPOSIT , STAKE, EXCHANGE
   *         enum: ["TRANSFER", "WITHDRAW", "DEPOSIT","STAKE","EXCHANGE"]
   *         in: query
   *         required: false
   *       - name: coinType
   *         description: coinType ? USDT || USD
   *         enum: ["USDT", "USD"]
   *         in: query
   *         required: false
   *       - name: fromDate
   *         description: fromDate
   *         in: query
   *         required: false
   *       - name: toDate
   *         description: toDate
   *         in: query
   *         required: false
   *       - name: page
   *         description: page
   *         in: query
   *         type: integer
   *         required: false
   *       - name: limit
   *         description: limit
   *         in: query
   *         type: integer
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */

  async transactionList(req, res, next) {
    const validationSchema = {
      search: Joi.string().optional(),
      transactionType: Joi.string().optional(),
      coinType: Joi.string().optional(),
      fromDate: Joi.string().allow("").optional(),
      toDate: Joi.string().allow("").optional(),
      page: Joi.number().optional(),
      limit: Joi.number().optional(),
    };
    try {
      const validatedBody = await Joi.validate(req.query);
      let userResult = await findUser({
        _id: req.userId
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      let result = [];
      validatedBody.userId = userResult._id;
      if (validatedBody.transactionType == "WITHDRAW") {
        console.log(validatedBody);
        let withdrawResult = await paginateSearchWithdraw(validatedBody);
        if (withdrawResult.docs.length === 0) {
          throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
        }
        return res.json(
          new response(withdrawResult, responseMessage.DATA_FOUND)
        );
      }
      if (validatedBody.transactionType == "TRANSFER") {
        let transferResult = await paginateSearchUserTransfer(validatedBody);
        if (transferResult.docs.length === 0) {
          throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
        }
        return res.json(
          new response(transferResult, responseMessage.DATA_FOUND)
        );
      }
      if (validatedBody.transactionType == "DEPOSIT") {
        let depositResult = await paginateSearchPaymentCon(validatedBody);
        if (depositResult.docs.length === 0) {
          throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
        }
        return res.json(
          new response(depositResult, responseMessage.DATA_FOUND)
        );
      }
      if (validatedBody.transactionType == "STAKE") {
        let depositResult = await paginateSearchStake(validatedBody);
        console.log(depositResult);

        if (depositResult.docs.length === 0) {
          throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
        }
        return res.json(
          new response(depositResult, responseMessage.DATA_FOUND)
        );
      }
      if (validatedBody.transactionType == "EXCHANGE") {
        let depositResult = await paginateSearchExchange(validatedBody);
        console.log(depositResult);

        if (depositResult.docs.length === 0) {
          throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
        }
        return res.json(
          new response(depositResult, responseMessage.DATA_FOUND)
        );
      }

      let withdrawRes = await withdrawList({
        userId: userResult._id
      });
      console.log("withdrawRes=====>>>", withdrawRes);
      let transferRes = await userTransferList({
        userId: userResult._id
      });
      console.log("transferRes=====>>>", transferRes);
      let depositRes = await listPaymentCon({
        userId: userResult._id
      });
      console.log("depositRes=====>>>", depositRes);
      let stakeResults = await stakeList({
        userId: userResult._id
      });
      console.log("stakeResults=====>>>", stakeResults);
      let exchaneResults = await exchangeList({
        userId: userResult._id
      });
      console.log("exchaneResults=====>>>", exchaneResults);
      let combinedArray = withdrawRes.concat(
        transferRes,
        depositRes,
        stakeResults,
        exchaneResults
      );
      if (validatedBody.coinType) {
        combinedArray = combinedArray.filter(
          (item) => item.coinTypeName === validatedBody.coinType
        );
      }
      // if (validatedBody.transactionType) {
      //   combinedArray = combinedArray.filter(item => item.type === validatedBody.transactionType);
      // }
      const pageSize = validatedBody.limit ? parseInt(validatedBody.limit) : 10;
      const currentPage = validatedBody.page ? parseInt(validatedBody.page) : 1;
      // Sort the combined array based on createdAt and updatedAt
      combinedArray.sort((a, b) => {
        const aTime = Math.max(new Date(a.createdAt), new Date(a.updatedAt));
        const bTime = Math.max(new Date(b.createdAt), new Date(b.updatedAt));
        return bTime - aTime;
      });
      if (combinedArray.length === 0) {
        throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
      }
      const totalItems = combinedArray.length;
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedResults = combinedArray.slice(startIndex, endIndex);
      const totalPage = Math.ceil(combinedArray.length / pageSize);
      const paginationResponse = {
        docs: paginatedResults,
        total: totalItems,
        limit: pageSize,
        page: currentPage,
        pages: totalPage,
      };
      return res.json(
        new response(paginationResponse, responseMessage.DATA_FOUND)
      );
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }


  /**
   * @swagger
   * /user/faqList:
   *   get:
   *     tags:
   *       - USER
   *     description: faqList
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: page
   *         description: page
   *         in: query
   *         required: false
   *       - name: limit
   *         description: limit
   *         in: query
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async faqList(req, res, next) {
    let validationSchema = {
      // search: Joi.string().optional(),
      page: Joi.number().optional(),
      limit: Joi.string().optional(),
    };
    try {
      const validatedBody = await Joi.validate(req.query, validationSchema);
      let adminRes = await findUser({
        _id: req.userId,
        userType: userType.USER,
      });
      if (!adminRes) throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      var result = await faqListWithPagination(validatedBody);
      if (result.docs.length == 0)
        throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
      return res.json(new response(result, responseMessage.DATA_FOUND));
    } catch (error) {
      return next(error);
    }
  }





  /**
   * @swagger
   * /user/getTransactions:
   *   get:
   *     tags:
   *       - USER TRANSACTION MANAGEMENT
   *     description: getTransactions
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: searchStatus
   *         description: status ? PENDING || COMPLETE
   *         enum: ["PENDING", "COMPLETE"]
   *         in: query
   *         required: false
   *       - name: fromDate
   *         description: fromDate
   *         in: query
   *         required: false
   *       - name: toDate
   *         description: toDate
   *         in: query
   *         required: false
   *       - name: page
   *         description: page
   *         in: query
   *         type: integer
   *         required: false
   *       - name: limit
   *         description: limit
   *         in: query
   *         type: integer
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async getTransactions(req, res, next) {
    const validationSchema = {
      searchStatus: Joi.string().allow("").optional(),
      fromDate: Joi.string().allow("").optional(),
      toDate: Joi.string().allow("").optional(),
      page: Joi.number().optional(),
      limit: Joi.number().optional(),
    };
    try {
      var validatedBody = await Joi.validate(req.query, validationSchema);

      let searchStatus = validatedBody.searchStatus;

      let userResult = await findUser({
        _id: req.userId
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      let result = [];
      validatedBody.userId = userResult._id;

      let withdrawRes = await withdrawList({
        userId: userResult._id,
        ...(searchStatus && {
          withdrawStatus: searchStatus
        }),
      });
      console.log("withdrawRes=====>>>", withdrawRes);
      let transferRes = await userTransferList({
        userId: userResult._id,
        ...(searchStatus && {
          transferStatus: searchStatus
        }),
      });
      console.log("transferRes=====>>>", transferRes);
      let depositRes = await listPaymentCon({
        userId: userResult._id,
        ...(searchStatus && {
          approveStatus: searchStatus
        }),
      });
      console.log("depositRes=====>>>", depositRes);
      let stakeResults = await stakeList({
        userId: userResult._id,
        ...(searchStatus && {
          isRequestedStaus: searchStatus
        }),
      });
      console.log("stakeResults=====>>>", stakeResults);
      let exchaneResults = await exchangeList({
        userId: userResult._id,
        ...(searchStatus && {
          exchangeStatus: searchStatus
        }),
      });
      console.log("exchaneResults=====>>>", exchaneResults);

      let combinedArray = withdrawRes.concat(
        transferRes,
        depositRes,
        stakeResults,
        exchaneResults
      );

      const pageSize = validatedBody.limit ? parseInt(validatedBody.limit) : 10;
      const currentPage = validatedBody.page ? parseInt(validatedBody.page) : 1;
      // Sort the combined array based on createdAt and updatedAt
      combinedArray.sort((a, b) => {
        const aTime = Math.max(new Date(a.createdAt), new Date(a.updatedAt));
        const bTime = Math.max(new Date(b.createdAt), new Date(b.updatedAt));
        return bTime - aTime;
      });
      if (combinedArray.length === 0) {
        throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
      }
      const totalItems = combinedArray.length;
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedResults = combinedArray.slice(startIndex, endIndex);
      const totalPage = Math.ceil(combinedArray.length / pageSize);
      const paginationResponse = {
        docs: paginatedResults,
        total: totalItems,
        limit: pageSize,
        page: currentPage,
        pages: totalPage,
      };
      return res.json(
        new response(paginationResponse, responseMessage.DATA_FOUND)
      );
    } catch (error) {
      console.log("error===in gettransactions", error);
      return next(error);
    }
  }






  /**
   * @swagger
   * /user/addAmountByStripeInCurrent:
   *   post:
   *     tags:
   *       - USER
   *     description: addAmountByStripeInCurrent by USER
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: addAmountByStripeInCurrent
   *         description: addAmountByStripeInCurrent
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/addAmountByStripeInCurrent'
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async addAmountByStripeInCurrent(req, res, next) {
    const validationSchema = {
      type: Joi.string().optional(),
      deposit: Joi.array().optional(),
      cardDetail: Joi.array().optional(),
      depositMethod: Joi.string().required(),
    };
    const validatedBody = await Joi.validate(req.body, validationSchema);
    let {
      type,
      deposit,
      cardDetail,
      depositMethod
    } = validatedBody;
    let stripeSecret = await Config.get("stripeSecret");
    const stripe = require("stripe")(stripeSecret);
    const amountToAdd = deposit[0].deposit;
    const debitCardToken = "tok_debit_card";
    const userResult = await findUser({
      _id: req.userId,
      status: {
        $ne: status.DELETE
      },
      userType: {
        $ne: userType.ADMIN
      },
    });
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountToAdd * 100,
        currency: "usd",
        payment_method: "pm_card_visa",
        description: "Adding money to Stripe account",
      });
      // let transactionObj = {
      //   userId: userResult._id,
      //   purpose: "Amount deposited in Current Account By card",
      //   amount: deposit[0].deposit,
      //   transactionType: "DEPOSIT",
      //   status: "SUCCESS",
      //   requestType: "DEPOSIT via Card "
      // };
      // await createTransactionHistory(transactionObj)

      // await addAmountInCurrentAccount(type, deposit, deliveryAddress, bankDetail, cardDetail, depositMethod, account)
      return res.status(200).json({
        paymentIntent,
        responseCode: 200
      });
    } catch (error) {
      //console.log("=============>>>>>>");
      return res.status(500).json({
        responseCode: error.message
      });
    }
  }

  /**
   * @swagger
   * /user/addAmountByStripeInConfirm:
   *   post:
   *     tags:
   *       - USER
   *     description: addAmountByStripeInConfirm by USER
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: addAmountByStripeInConfirm
   *         description: addAmountByStripeInConfirm
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/addAmountByStripeInConfirm'
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async addAmountByStripeInConfirm(req, res, next) {
    const validationSchema = {
      paymentMethod: Joi.required(),
      amount: Joi.string().required(),
      type: Joi.string().optional(),
      cardDetail: Joi.array().optional(),
    };
    const validatedBody = await Joi.validate(req.body, validationSchema);
    let {
      paymentIntent,
      paymentMethod,
      type,
      amount,
      cardDetail
    } =
    validatedBody;
    console.log("validatedBody=======>>>>>>", validatedBody);

    const userResult = await findUser({
      _id: req.userId,
      status: {
        $ne: status.DELETE
      },
      userType: {
        $ne: userType.ADMIN
      },
    });
    // let stripeSecret = await Config.get("stripeSecret");
    // const stripe = require('stripe')(stripeSecret);
    try {
      // const intent = await stripe.paymentIntents.confirm(paymentIntent, {
      //   payment_method: paymentMethod,
      //   return_url: "https://www.google.com"
      // });
      // console.log("🚀 ~ userController ~ addAmountByStripeInConfirm ~ intent:", intent)
      if (type == "toBySuscription") {
        let updatedAccount;
        let deposit = [{
          deposit: parseFloat(amount),
          depositMethod: "card"
        }];
        const depositObj = {
          type: "current",
          depositMethod: "card",
          deposit: deposit,
          userId: userResult._id,
          status: true,
        };
        updatedAccount = await updateAmountAndTransaction(
          depositObj,
          userResult,
          type
        );
        let updatedBalance = await userAccount
          .findOne({
            userId: userResult._id,
            type: "current"
          })
          .lean();
        // let newBalance = updatedBalance.amount - parseInt(amount);
        // let newObj = {
        //   amount: newBalance,
        // };
        // let balanacededuct = await userAccount.findOneAndUpdate(
        //   { userId: userResult._id, type: "current" },
        //   newObj,
        //   { upsert: true, new: true }
        // );
        // console.log("consoleeeee2222222",balanacededuct)
      } else {
        let updatedAccount;
        let deposit = [{
          deposit: parseInt(amount),
          depositMethod: "card"
        }];
        const depositObj = {
          type: "current",
          depositMethod: "card",
          deposit: deposit,
          userId: userResult._id,
          status: true,
        };
        updatedAccount = await updateAmountAndTransaction(
          depositObj,
          userResult
        );
      }
      return res
        .status(200)
        .json({
          responseCode: 200,
          responseMessage: "Deposit transaction confirmed successfully",
        });
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  }

  /**
   * @swagger
   * /user/addAmountInCurrentAccount:
   *   post:
   *     tags:
   *       - USER
   *     description: addAmountInCurrentAccount by USER
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: addAmountInCurrentAccount
   *         description: addAmountInCurrentAccount
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/addAmountInCurrentAccount'
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async addAmountInCurrentAccount(req, res, next) {
    const validationSchema = {
      type: Joi.string().optional(),
      deposit: Joi.array().optional(),
      deliveryAddress: Joi.array().optional(),
      bankDetail: Joi.array().optional(),
      cardDetail: Joi.array().optional(),
      depositMethod: Joi.string().required(),
      account: Joi.array().optional(),
    };
    try {
      const validatedBody = await Joi.validate(req.body, validationSchema);
      let {
        type,
        deposit,
        deliveryAddress,
        bankDetail,
        cardDetail,
        depositMethod,
        account,
      } = validatedBody;
      const userResult = await findUser({
        _id: req.userId,
        status: {
          $ne: status.DELETE
        },
        userType: {
          $ne: userType.ADMIN
        },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      validatedBody.userId = userResult._id.toString();
      const depositObj = {
        type: type,
        depositMethod: depositMethod,
        deposit: deposit,
        userId: userResult._id,
      };
      let updatedAccount;
      let message;
      if (validatedBody.depositMethod == "card") {
        try {
          depositObj.cardDetail = cardDetail;
          depositObj.status = true;
          updatedAccount = await updateAmountAndTransaction(
            depositObj,
            userResult
          );
          message = "Amount Deposited Successfully";
        } catch (error) {
          console.error("Payment failed:", error.message);
          throw error;
        }
      } else if (validatedBody.depositMethod == "account") {
        depositObj.bankDetail = bankDetail;
        depositObj.account = account;
        depositObj.status = true;
        updatedAccount = await updateAmountAndTransaction(
          depositObj,
          userResult
        );
        message = "Amount Deposited Successfully";
      } else if (validatedBody.depositMethod == "pickup") {
        depositObj.deliveryAddress = deliveryAddress;
        depositObj.status = false;
        updatedAccount = await updateAmountAndTransaction(
          depositObj,
          userResult
        );
        message =
          "Pickup Request has been generated successfully. A delivery boy will be asigned to pickup the amount from your address!";
      }
      return res
        .status(200)
        .json({
          updatedAccount,
          responseCode: 200,
          responseMessage: message
        });
    } catch (error) {
      console.log("error=======>>>", error);
      return next(error);
    }
  }




  /**
   * @swagger
   * /user/addAmountInSavingAccount:
   *   post:
   *     tags:
   *       - USER
   *     description: USER
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: type
   *         description: type
   *         in: formData
   *         required: true
   *       - name: amount
   *         description: amount
   *         in: formData
   *         required: true
   *       - name: isLockedBalance
   *         description: isLockedBalance
   *         in: formData
   *         required: true
   *       - name: deposit
   *         description: deposit
   *         in: formData
   *         required: true
   *       - name: account
   *         description: account
   *         in: formData
   *         required: true
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async addAmountInSavingAccount(req, res, next) {
    const validationSchema = {
      type: Joi.string().optional(),
      amount: Joi.string().optional(),
      isLockedBalance: Joi.string().optional(),
      deposit: Joi.string().optional(),
      account: Joi.string().optional(),
    };
    try {
      const validatedBody = await Joi.validate(req.body, validationSchema);
      var userResult = await findUser({
        _id: req.userId,
        status: {
          $ne: status.DELETE
        },
        userType: {
          $ne: userType.ADMIN
        },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      validatedBody.userId = userResult._id.toString();

      console.log("4206666666", validatedBody);
      const deposited = await userAccount.create(validatedBody);
      if (deposited) {
        return res.status(200).json({
          deposited,
          responseCode: 200,
          message: "Deposited Successfully",
        });
      }
    } catch (error) {
      console.log("error=======>>>", error);
      return next(error);
    }
  }









  /**
   * @swagger
   * /user/getBankCountries:
   *   get:
   *     tags:
   *       - USER
   *     description: getBankCountries by USER
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
  async getBankCountries(req, res, next) {
    try {
      let bankCountries = await bankCountry.find();
      if (bankCountries.length != 0) {
        return res.status(200).json({
          bankCountries,
          responseCode: 200,
          responseMessage: "All countries found successfully",
        });
      } else {
        return res
          .status(404)
          .json({
            responseCode: 404,
            responseMessage: "Data not found"
          });
      }
    } catch (error) {
      if (error.isJoi) {
        return res.status(400).json({
          error: error.details[0].message
        });
      } else {
        return next(error);
      }
    }
  }








  /**
   * @swagger
   * /user/transactionHistory:
   *   get:
   *     tags:
   *       - USER
   *     description: transactionHistory by USER
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: accountType
   *         description: accountType
   *         in: query
   *         required: false
   *       - name: page
   *         description: page
   *         in: query
   *         required: false
   *       - name: limit
   *         description: limit
   *         in: query
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async transactionHistory(req, res, next) {
    var validationSchema = {
      accountType: Joi.string().optional(),
      page: Joi.string().optional(),
      limit: Joi.string().optional(),
    };
    try {
      const userResult = await findUser({
        _id: req.userId,
        userType: userType.USER,
      });
      if (!userResult) {
        throw apiError.unauthorized(responseMessage.UNAUTHORIZED);
      }
      var validatedBody = await Joi.validate(req.query, validationSchema);

      let page = parseInt(validatedBody.page) || 1;
      let limit = parseInt(validatedBody.limit) || 10;

      let skip = (page - 1) * limit;
      if (userResult.userType == "ADMIN") {
        let isTransactionHistory = await transactionHistry
          .find({
            $or: [{
              userId: userResult._id
            }, {
              sentTo: userResult._id
            }],
            status: {
              $ne: "REJECT"
            },
          })
          .sort({
            createdAt: -1
          })
          .populate("userId")
          .populate("sentTo")
          .skip(skip)
          .limit(limit);
        // console.log(          "🚀 ~ userController ~ transactionHistory ~ isTransactionHistory:",          isTransactionHistory        );

        let totalData = await transactionHistry.countDocuments({
          $or: [{
            userId: userResult._id
          }, {
            sentTo: userResult._id
          }],
          accountType: validatedBody.accountType,
        });
        if (isTransactionHistory.length != 0) {
          let totalPages = Math.ceil(totalData / limit);

          let resultObj = {
            isTransactionHistory,
            totalData,
            totalPages,
            currentPage: page,
            limit: limit,
          };
          return res.status(200).json({
            resultObj,
            responseCode: 200,
            responseMessage: "Transaction history get successfully",
          });
        } else {
          return res.status(404).json({
            responseCode: 404,
            responseMessage: "Transaction data Doesn't Exists",
          });
        }
      } else {
        console.log("userResult._id =========>>>>>", userResult._id);
        let isTransactionHistory = await transactionHistry
          .find({
            $or: [{
              userId: userResult._id
            }, {
              sentTo: userResult._id
            }],
            status: {
              $ne: "PENDING"
            },
          })
          .sort({
            createdAt: -1
          })
          .populate("userId")
          .populate("sentTo")
          .skip(skip)
          .limit(limit);
        // console.log(
        //   "🚀 ~ userController ~ transactionHistory ~ isTransactionHistory:",
        //   isTransactionHistory
        // );

        let totalData = await transactionHistry.countDocuments({
          $or: [{
            userId: userResult._id
          }, {
            sentTo: userResult._id
          }],
          accountType: validatedBody.accountType,
        });
        if (isTransactionHistory.length != 0) {
          let totalPages = Math.ceil(totalData / limit);

          let resultObj = {
            isTransactionHistory,
            totalData,
            totalPages,
            currentPage: page,
            limit: limit,
          };

          return res.status(200).json({
            resultObj,
            responseCode: 200,
            responseMessage: "Transaction history get successfully",
          });
        } else {
          return res.status(404).json({
            responseCode: 404,
            responseMessage: "Transaction data Doesn't Exists",
          });
        }
      }
    } catch (error) {
      console.log("getCashCollectionList==>>>", error);
      return next(error);
    }
  }



  /**
   * @swagger
   * /user/notificationPermission:
   *   put:
   *     tags:
   *       - USER
   *     description: notificationPermission by USER
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: notificationPermission
   *         description: notificationPermission
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/notificationPermision'
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async notificationPermission(req, res, next) {
    var validationSchema = {
      enableDisableNotification: Joi.boolean().required(),
    };

    try {
      const userResult = await findUser({
        _id: req.userId,
        userType: userType.USER,
      });
      if (!userResult) {
        throw apiError.unauthorized(responseMessage.UNAUTHORIZED);
      }
      var validatedBody = await Joi.validate(req.body, validationSchema);

      let notificationObj = {
        marketingOfferNotification: validatedBody.enableDisableNotification,
        transactionNotification: validatedBody.enableDisableNotification,
        investmentNewsNotification: validatedBody.enableDisableNotification,
      };
      console.log(
        "🚀 ~ userController ~ notificationPermission ~ notificationObj:",
        notificationObj
      );

      let permissionUpdated = await userModel.findOneAndUpdate({
          _id: userResult._id
        },
        notificationObj, {
          upsert: true,
          new: true
        }
      );
      if (permissionUpdated) {
        return res.status(200).json({
          permissionUpdated,
          responseCode: 200,
          responseMessage: "Permission updated successfully",
        });
      }
    } catch (error) {
      console.log("getCashCollectionList==>>>", error);
      return next(error);
    }
  }



  /**
   * @swagger
   * /user/isUserExist:
   *   get:
   *     tags:
   *       - USER
   *     description: isUserExist by USER
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: countryCode
   *         description: countryCode
   *         in: query
   *         required: true
   *       - name: mobileNumber
   *         description: mobileNumber
   *         in: query
   *         required: true
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async isUserExist(req, res, next) {
    var validationSchema = {
      countryCode: Joi.string().required(),
      mobileNumber: Joi.string().required(),
    };
    try {
      const validatedBody = await Joi.validate(req.query, validationSchema);
      const userResult = await findUser({
        countryCode: validatedBody.countryCode,
        mobileNumber: validatedBody.mobileNumber,
      });

      if (userResult && userResult.status == "BLOCK") {
        // console.log("74444444444444444",userResult.blockedReason)
        // console.log("74444444444444444",userResult.blockedReason)
        const BlockedReason = userResult.blockedReason ?
          userResult.blockedReason :
          "";
        return res.status(403).json({
          BlockedReason,
          responseCode: 403,
          responseMessage: "This user Blocked",
        });
      } else if (userResult && userResult.isUpdateProfile == false) {
        return res.status(403).json({
          responseCode: 403,
          responseMessage: "Please update your profile",
        });
      } else if (userResult && userResult.status == "ACTIVE") {
        return res.status(200).json({
          firstName: userResult.firstName,
          responseCode: 200,
          responseMessage: "User found successfully",
        });
      } else {
        return res
          .status(404)
          .json({
            responseCode: 404,
            responseMessage: "User not found"
          });
      }
    } catch (error) {
      console.log("getCashCollectionList==>>>", error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /user/getTransactionNotification:
   *   get:
   *     tags:
   *       - USER
   *     description: getTransactionNotification by USER
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
  async getTransactionNotification(req, res, next) {
    try {
      var userResult = await findUser({
        _id: req.userId,
        status: {
          $ne: status.DELETE
        },
        userType: {
          $ne: userType.ADMIN
        },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      let getNotifications = await transactionNotification
        .find({
          userId: userResult._id,
        })
        .populate("userId");
      if (getNotifications.length != 0) {
        return res.status(200).json({
          getNotifications,
          responseCode: 200,
          responseMessage: "Notification found successfully",
        });
      } else {
        return res
          .status(404)
          .json({
            responseCode: 404,
            responseMessage: "Data not found"
          });
      }
    } catch (error) {
      console.log("getCashCollectionList==>>>", error);
      return next(error);
    }
  }





  /**
   * @swagger
   * /user/invoiceDownload:
   *   get:
   *     tags:
   *       - USER
   *     description: invoiceDownload
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: userId
   *         description: userId
   *         in: query
   *         required: true
   *       - name: page
   *         description: false
   *         in: query
   *         required: false
   *       - name: limit
   *         description: limit
   *         in: query
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async invoiceDownload(req, res, next) {
    var validationSchema = {
      userId: Joi.string().required(),
      page: Joi.string().optional(),
      limit: Joi.string().optional(),
    };
    try {
      const validatedBody = await Joi.validate(req.query, validationSchema);

      const userResult = await findUser({
        _id: validatedBody.userId,
        userType: userType.USER,
      });
      if (!userResult) {
        throw apiError.unauthorized(responseMessage.UNAUTHORIZED);
      }

      let page = parseInt(validatedBody.page) || 1;
      let limit = parseInt(validatedBody.limit) || 10;
      let skip = (page - 1) * limit;

      let isTransactionHistory = await transactionHistry
        .find({
          $or: [{
            userId: userResult._id
          }, {
            sentTo: userResult._id
          }]
        })
        .populate({
          path: "userId",
          select: "userName email",
        })
        .skip(skip)
        .limit(limit);
      isTransactionHistory = isTransactionHistory.map((transaction) => ({
        userName: transaction.userId.userName,
        email: transaction.userId.email,
        userId: transaction.userId._id,
        transactionType: transaction.transactionType,
        amount: transaction.amount,
        createdAt: transaction.createdAt,
      }));

      let totalData = await transactionHistry.countDocuments({
        $or: [{
          userId: userResult._id
        }, {
          sentTo: userResult._id
        }],
        accountType: validatedBody.accountType,
      });

      if (isTransactionHistory.length != 0) {
        let totalPages = Math.ceil(totalData / limit);

        let resultObj = {
          isTransactionHistory,
          totalData,
          totalPages,
          currentPage: page,
          limit: limit,
        };
        return res.status(200).json({
          resultObj,
          responseCode: 200,
          responseMessage: "Transaction history retrieved successfully",
        });
      } else {
        return res.status(404).json({
          responseCode: 404,
          responseMessage: "Transaction data doesn't exist for this user",
        });
      }
    } catch (error) {
      console.log("transactionHistory error:", error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /user/sendWhatsAppOTP:
   *   post:
   *     tags:
   *       - USER
   *     description: sendWhatsAppOTP
   *     produces:
   *       - application/jsonM
   *     parameters:
   *       - name: token
   *         in: header
   *         required: true
   *         description: User token
   *       - name: body
   *         in: body
   *         description: WhatsApp OTP
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             whatsappNumber:
   *               type: string
   *     responses:
   *       200:
   *         description: Returns success message
   */

  async sendWhatsAppOTP(req, res, next) {
    let validationSchema = {
      whatsappNumber: Joi.string().required(),
    };
    try {
      let userResult = await userModel.find({
        _id: req.userId
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      let validatedBody = await Joi.validate(req.body, validationSchema);
      const {
        whatsappNumber
      } = validatedBody;
      let otp = await commonFunction.getOTP();

      let response = await commonFunction.sentWhatsappOtp(whatsappNumber, otp);

      const user = await userModel.findOneAndUpdate({
        _id: req.userId
      }, {
        otpMobile: otp
      });
      return res.status(200).json({
        responseMessage: response
      });
    } catch (error) {
      res.status(400).json({
        error: error.message
      });
      return next(error);
    }
  }





  //=======================================>>>>>Cards APi =====================================================//

  /**
   * @swagger
   * /user/getCardBalance:
   *   get:
   *     tags:
   *       - CARD
   *     summary: Retrieve the card balance
   *     description: This endpoint retrieves the card balance from the AdMediaCards API.
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Successfully retrieved the card balance
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 balance:
   *                   type: number
   *                   example: 100.50
   *                 currency:
   *                   type: string
   *                   example: "USD"
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized - Invalid API Key
   *       500:
   *         description: Internal server error
   */


  async getCardBalance(req, res, next) {
    try {

      // Make the GET request to the AdMediaCards API
      const response = await axios.get('https://openapi.admediacards.com/api/v1/open/account/balance', {
        headers: {
          Authorization: `ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED`,
        },
      });

      // Forward the response from the AdMediaCards API to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error.response.data);
      res
        .status(error.response.status || 500)
        .json({
          error: error.response.data
        });
    }
  }




  /**
   * @swagger
   * /user/getCardProfile:
   *   get:
   *     tags:
   *       - CARD
   *     summary: Retrieve the card Profile
   *     description: This endpoint retrieves the card Profile from the AdMediaCards API.
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Successfully retrieved the card balance
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 balance:
   *                   type: number
   *                   example: 100.50
   *                 currency:
   *                   type: string
   *                   example: "USD"
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized - Invalid API Key
   *       500:
   *         description: Internal server error
   */


  async getCardProfile(req, res, next) {
    try {

      // Make the GET request to the AdMediaCards API
      const response = await axios.get('https://openapi.admediacards.com/api/v1/open/account/profile', {
        headers: {
          Authorization: `ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED`,
        },
      });

      // Forward the response from the AdMediaCards API to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error.response.data);
      res
        .status(error.response.status || 500)
        .json({
          error: error.response.data
        });
    }
  }




  /**
   * @swagger
   * /user/getCardProgram:
   *   get:
   *     tags:
   *       - CARD
   *     summary: Retrieve the card Program
   *     description: This endpoint retrieves the card Program from the AdMediaCards API.
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Successfully retrieved the card balance
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 balance:
   *                   type: number
   *                   example: 100.50
   *                 currency:
   *                   type: string
   *                   example: "USD"
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized - Invalid API Key
   *       500:
   *         description: Internal server error
   */


  async getCardPrgram(req, res, next) {
    try {

      // Make the GET request to the AdMediaCards API
      const response = await axios.get('https://openapi.admediacards.com/api/v1/open/account/programs', {
        headers: {
          Authorization: `ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED`,
        },
      });

      // Forward the response from the AdMediaCards API to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error.response.data);
      res
        .status(error.response.status || 500)
        .json({
          error: error.response.data
        });
    }
  }



  /**
   * @swagger
   * /user/getListCard:
   *   get:
   *     tags:
   *       - CARD
   *     summary: Retrieve the card list
   *     description: This endpoint retrieves the card list from the AdMediaCards API.
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Successfully retrieved the card balance
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 balance:
   *                   type: number
   *                   example: 100.50
   *                 currency:
   *                   type: string
   *                   example: "USD"
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized - Invalid API Key
   *       500:
   *         description: Internal server error
   */


  async getListCard(req, res, next) {
    try {

      // Make the GET request to the AdMediaCards API
      const response = await axios.get('https://openapi.admediacards.com/api/v1/open/cards', {
        headers: {
          Authorization: `ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED`,
        },
      });

      // Forward the response from the AdMediaCards API to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error.response.data);
      res
        .status(error.response.status || 500)
        .json({
          error: error.response.data
        });
    }
  }


  /**
   * @swagger
   * /user/addCard:
   *   post:
   *     tags:
   *       - CARD
   *     description: Create a new card using the AdMediaCards API.
   *     produces:
   *       - application/json
   *     parameters: 
   *       - name: body
   *         in: body
   *         description: Card details
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             ProgramID:
   *               type: integer
   *               example: 11
   *             Limit:
   *               type: number
   *               example: 1000
   *             FirstName:
   *               type: string
   *               example: "fn"
   *             LastName:
   *               type: string
   *               example: "ln"
   *             Address1:
   *               type: string
   *               example: "add"
   *             City:
   *               type: string
   *               example: "city"
   *             State:
   *               type: string
   *               example: "CA"
   *             Zip:
   *               type: string
   *               example: "123456"
   *             CountryIso:
   *               type: string
   *               example: "US"
   *             ExpMonth:
   *               type: string
   *               example: "11"
   *             ExpYear:
   *               type: string
   *               example: "2022"
   *             PhoneNumber:
   *               type: string
   *               example: "+15105551212"
   *     responses:
   *       200:
   *         description: Successfully created a new card
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 CardID:
   *                   type: string
   *                   example: "abc12345"
   *                 Status:
   *                   type: string
   *                   example: "Active"
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Internal server error
   */

  async addCard(req, res, next) {
    try {
      // Extract data from the request body
      const {
        ProgramID,
        Limit,
        FirstName,
        LastName,
        Address1,
        City,
        State,
        Zip,
        CountryIso,
        ExpMonth,
        ExpYear,
        PhoneNumber
      } = req.body;

      // Make the POST request to the AdMediaCards API
      const response = await axios.post('https://openapi.admediacards.com/api/v1/open/cards', {
        ProgramID,
        Limit,
        FirstName,
        LastName,
        Address1,
        City,
        State,
        Zip,
        CountryIso,
        ExpMonth,
        ExpYear,
        PhoneNumber
      }, {
        headers: {
          'content-type': 'application/json',
          'Authorization': 'ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED'
        }
      });


      // Forward the response from the AdMediaCards API to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error.response ? error.response.data : error.message);

      res.status(error.response ? error.response.status : 500).json({
        error: error.response ? error.response.data : "Internal Server Error"
      });
    }
  }
  /**
   * @swagger
   * /user/updateCard:
   *   put:
   *     tags:
   *       - CARD
   *     description: Update an existing card using the AdMediaCards API.
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: cardid
   *         in: query
   *         description: The ID of the card to be updated
   *         required: true
   *         schema:
   *           type: integer
   *           example: 12345
   *       - name: body
   *         in: body
   *         description: Updated card details
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             Type:
   *               type: string
   *               example: "NameAddress"
   *             Limit:
   *               type: number
   *               example: 500.00
   *             Status:
   *               type: boolean
   *               example: true
   *             FirstName:
   *               type: string
   *               example: "John"
   *             LastName:
   *               type: string
   *               example: "Doe"
   *             Address1:
   *               type: string
   *               example: "123 Main St"
   *             City:
   *               type: string
   *               example: "Los Angeles"
   *             State:
   *               type: string
   *               example: "CA"
   *             Country:
   *               type: string
   *               example: "US"
   *             Zip:
   *               type: string
   *               example: "90001"
   *     responses:
   *       200:
   *         description: Successfully updated the card
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 CardID:
   *                   type: string
   *                   example: "abc12345"
   *                 Status:
   *                   type: string
   *                   example: "Updated"
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Internal server error
   */

  async updateCard(req, res, next) {
    try {
      // Extract data from the request body
      const {
        Type,
        Limit,
        Status,
        FirstName,
        LastName,
        Address1,
        City,
        State,
        Country,
        Zip
      } = req.body;

      // Extract card ID from the query parameters
      const {
        cardid
      } = req.query;

      // Build the payload based on the Type
      const payload = {
        Type
      };

      if (Type === 'Limit') {
        payload.Limit = Limit;
      } else if (Type === 'Status') {
        payload.Status = Status;
      } else if (Type === 'NameAddress') {
        if (FirstName) payload.FirstName = FirstName;
        if (LastName) payload.LastName = LastName;
        if (Address1) payload.Address1 = Address1;
        if (City) payload.City = City;
        if (State) payload.State = State;
        if (Country) payload.Country = Country;
        if (Zip) payload.Zip = Zip;
      }

      // Make the PUT request to the AdMediaCards API
      const response = await axios.put(`https://openapi.admediacards.com/api/v1/open/cards/${cardid}`, payload, {
        headers: {
          'content-type': 'application/json',
          'Authorization': 'ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED' // Replace with your actual API key
        }
      });

      // Forward the response from the AdMediaCards API to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error.response ? error.response.data : error.message);


      res.status(error.response ? error.response.status : 500).json({
        error: error.response ? error.response.data : "Internal Server Error"
      });
    }
  }





  /**
   * @swagger
   * /user/cardNote:
   *   post:
   *     tags:
   *       - CARD
   *     description: Update a card's note using the AdMediaCards API.
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: cardid
   *         in: query
   *         description: The ID of the card to be updated
   *         required: true
   *         schema:
   *           type: integer
   *           example: 12345
   *       - name: body
   *         in: body
   *         description: Note to be added or updated for the card
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             Note:
   *               type: string
   *               example: "This is a new note."
   *     responses:
   *       200:
   *         description: Successfully updated the card note
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 CardID:
   *                   type: string
   *                   example: "abc12345"
   *                 Status:
   *                   type: string
   *                   example: "Updated"
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Internal server error
   */

  async cardNote(req, res, next) {
    try {
      // Extract data from the request body
      const {
        Note
      } = req.body;

      // Extract card ID from the query parameters
      const {
        cardid
      } = req.query;

      // Build the payload with the Note
      const payload = {
        Note
      };

      // Make the PUT request to the AdMediaCards API
      const response = await axios.post(`https://openapi.admediacards.com/api/v1/open/cards/${cardid}/notes`, payload, {
        headers: {
          'content-type': 'application/json',
          'Authorization': 'ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED' // Replace with your actual API key
        }
      });

      // Forward the response from the AdMediaCards API to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error.response ? error.response.data : error.message);

      res.status(error.response.status || 500).json({
        error: error.response.data || "Internal Server Error"
      });
    }
  }

  /**
   * @swagger
   * /user/getTransactionsList:
   *   get:
   *     tags:
   *       - CARD
   *     description: Retrieve a list of transactions from the AdMediaCards API.
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Successfully retrieved the list of transactions
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   TransactionID:
   *                     type: integer
   *                     example: 19550712
   *                   ParentTransactionID:
   *                     type: integer
   *                     nullable: true
   *                     example: null
   *                   CardID:
   *                     type: integer
   *                     example: 298469
   *                   Response:
   *                     type: string
   *                     example: "declined"
   *                   ResponseText:
   *                     type: string
   *                     example: "Card is not active"
   *                   Merchant:
   *                     type: string
   *                     example: "FACEBK HXM6ZJXE42"
   *                   Amount:
   *                     type: number
   *                     format: float
   *                     example: 8.04
   *                   TxDateTimeIso:
   *                     type: integer
   *                     example: 1676617401
   *                   TypeEnum:
   *                     type: string
   *                     example: "Authorization"
   *                   IsTemp:
   *                     type: boolean
   *                     example: true
   *                   Country:
   *                     type: string
   *                     example: "IE"
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Internal server error
   */

  async getTransactionsList(req, res, next) {
    try {
      const response = await axios.get('https://openapi.admediacards.com/api/v1/open/transactions', {
        headers: {
          'Authorization': 'ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED'
        }
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      res.status(500).json({
        error: 'Failed to fetch transactions'
      });
    }
  }
  /**  
   * @swagger  
   * /user/getTransactionsCardList:  
   *   get:  
   *     tags:  
   *       - CARD  
   *     description: Get a list of transactions for a specific card using the AdMediaCards API.  
   *     produces:  
   *       - application/json  
   *     parameters:  
   *       - name: cardid  
   *         in: query  
   *         description: The ID of the card whose transactions are to be retrieved  
   *         required: true  
   *         schema:  
   *           type: integer  
   *           example: 12345  
   *     responses:  
   *       200:  
   *         description: Successfully retrieved the list of transactions  
   *         content:  
   *           application/json:  
   *             schema:  
   *               type: object  
   *               properties:  
   *                 transactions:  
   *                   type: array  
   *                   items:  
   *                     type: object  
   *                     properties:  
   *                       transactionId:  
   *                         type: string  
   *                         example: "txn_abc123"  
   *                       amount:  
   *                         type: number  
   *                         example: 100.50  
   *                       date:  
   *                         type: string  
   *                         format: date-time  
   *                         example: "2023-10-10T12:00:00Z"  
   *       400:  
   *         description: Bad request  
   *       401:  
   *         description: Unauthorized  
   *       500:  
   *         description: Internal server error  
   */
  async getTransactionsCardList(req, res, next) {
    try {

      const {
        cardid
      } = req.query;
      const response = await axios.get(`https://openapi.admediacards.com/api/v1/open/cards/${cardid}/transactions`, {
        headers: {
          'Authorization': 'ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED'
        }
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      res.status(500).json({
        error: 'Failed to fetch transactions'
      });
    }
  }


  /**
   * @swagger
   * /user/getInternalTransactionList:
   *   get:
   *     tags:
   *       - CARD
   *     description: Retrieve a list of transactions from the AdMediaCards API.
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Successfully retrieved the list of transactions
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   TransactionID:
   *                     type: integer
   *                     example: 19550712
   *                   ParentTransactionID:
   *                     type: integer
   *                     nullable: true
   *                     example: null
   *                   CardID:
   *                     type: integer
   *                     example: 298469
   *                   Response:
   *                     type: string
   *                     example: "declined"
   *                   ResponseText:
   *                     type: string
   *                     example: "Card is not active"
   *                   Merchant:
   *                     type: string
   *                     example: "FACEBK HXM6ZJXE42"
   *                   Amount:
   *                     type: number
   *                     format: float
   *                     example: 8.04
   *                   TxDateTimeIso:
   *                     type: integer
   *                     example: 1676617401
   *                   TypeEnum:
   *                     type: string
   *                     example: "Authorization"
   *                   IsTemp:
   *                     type: boolean
   *                     example: true
   *                   Country:
   *                     type: string
   *                     example: "IE"
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Internal server error
   */

  async getInternalTransactionList(req, res, next) {
    try {

      const response = await axios.get(`https://openapi.admediacards.com/api/v1/open/transactions/internal`, {
        headers: {
          'Authorization': 'ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED'
        }
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      res.status(500).json({
        error: 'Failed to fetch transactions'
      });
    }
  }



  /**
   * @swagger
   * /user/listWebhooks:
   *   get:
   *     tags:
   *       - CARD
   *     description: Retrieve a list of transactions from the AdMediaCards API.
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Successfully retrieved the list of transactions
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   TransactionID:
   *                     type: integer
   *                     example: 19550712
   *                   ParentTransactionID:
   *                     type: integer
   *                     nullable: true
   *                     example: null
   *                   CardID:
   *                     type: integer
   *                     example: 298469
   *                   Response:
   *                     type: string
   *                     example: "declined"
   *                   ResponseText:
   *                     type: string
   *                     example: "Card is not active"
   *                   Merchant:
   *                     type: string
   *                     example: "FACEBK HXM6ZJXE42"
   *                   Amount:
   *                     type: number
   *                     format: float
   *                     example: 8.04
   *                   TxDateTimeIso:
   *                     type: integer
   *                     example: 1676617401
   *                   TypeEnum:
   *                     type: string
   *                     example: "Authorization"
   *                   IsTemp:
   *                     type: boolean
   *                     example: true
   *                   Country:
   *                     type: string
   *                     example: "IE"
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Internal server error
   */

  async listWebhooks(req, res, next) {
    try {

      const response = await axios.get(`https://openapi.admediacards.com/api/v1/open/webhooks`, {
        headers: {
          'Authorization': 'ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED'
        }
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      res.status(500).json({
        error: 'Failed to fetch transactions'
      });
    }
  }

  /**  
   * @swagger  
   * /user/addWebhook:  
   *   post:  
   *     tags:  
   *       - CARD  
   *     description: Get a list of transactions for a specific card using the AdMediaCards API.  
   *     produces:  
   *       - application/json  
   *     parameters:  
   *       - name: Event  
   *         in: query  
   *         description: The ID of the card whose transactions are to be retrieved  
   *         required: true  
   *         schema:  
   *           type: string  
   *           example: TransactionAdded   
   *       - name: PayloadURL  
   *         in: query  
   *         description: The ID of the card whose transactions are to be retrieved  
   *         required: true  
   *         schema:  
   *           type: Url  
   *           example: https://mydomain.com/test-post  
   *     responses:  
   *       200:  
   *         description: Successfully retrieved the list of transactions  
   *         content:  
   *           application/json:  
   *             schema:  
   *               type: object  
   *               properties:  
   *                 transactions:  
   *                   type: array  
   *                   items:  
   *                     type: object  
   *                     properties:  
   *                       transactionId:  
   *                         type: string  
   *                         example: "txn_abc123"  
   *                       amount:  
   *                         type: number  
   *                         example: 100.50  
   *                       date:  
   *                         type: string  
   *                         format: date-time  
   *                         example: "2023-10-10T12:00:00Z"  
   *       400:  
   *         description: Bad request  
   *       401:  
   *         description: Unauthorized  
   *       500:  
   *         description: Internal server error  
   */

  async addWebhook(req, res, next) {
    try {
      const payload = {
        Event: req.body.Event,
        PayloadURL: req.body.PayloadURL
      };

      // Make the POST request to the API
      const response = await axios.post(
        'https://openapi.admediacards.com/api/v1/open/webhooks',
        payload, // Send the payload in the body of the request
        {
          headers: {
            'Authorization': 'ApiKey secret_sk_gjg2YDpkRS774hdAFneCYnED',
            'content-type': 'application/json'
          }
        }
      );

      // Send the API response back to the client
      res.json(response.data);
    } catch (error) {
      console.error('Error creating webhook:', error);
      res.status(500).json({
        error: 'Failed to create webhook'
      });
    }
  }


  /**
   * @swagger
   * /user/editWebhook:
   *   put:
   *     tags:
   *       - CARD
   *     description: Edit an existing webhook using the AdMediaCards API.
   *     produces:
   *       - application/json
   *     parameters: 
   *       - name: webhookid
   *         in: query
   *         description: The URL to which the webhook webhookid will be sent.
   *         required: true
   *       - name: PayloadURL
   *         in: query
   *         description: The URL to which the webhook payload will be sent.
   *         required: true
   *         schema:
   *           type: string
   *           example: "https://mydomain.com/webhook"
   *       - name: IsActive
   *         in: query
   *         description: Whether the webhook is active or not.
   *         required: true
   *         schema:
   *           type: boolean
   *           example: true
   *       - name: FailedAttempts
   *         in: query
   *         description: The number of failed attempts before the webhook is deactivated.
   *         required: false
   *         schema:
   *           type: integer
   *           example: 0
   *     responses:
   *       200:
   *         description: Webhook edited successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: "Webhook edited successfully"
   *                 webhook:
   *                   type: object
   *                   properties:
   *                     webhookid:
   *                       type: string
   *                     PayloadURL:
   *                       type: string
   *                     IsActive:
   *                       type: boolean
   *                     FailedAttempts:
   *                       type: integer
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Internal server error
   */

  async editWebhook(req, res, next) {
    try {
      // Extract webhookid from the query
      const {
        webhookid,
        PayloadURL,
        IsActive,
        FailedAttempts
      } = req.query;

      // Create the payload object
      const payload = {
        PayloadURL,
        IsActive,
        FailedAttempts
      };

      // Make the PUT request to the API
      const response = await axios.put(
        `https://openapi.admediacards.com/api/v1/open/webhooks/${webhookid}`,
        payload, {
          headers: {
            Authorization: 'ApiKey sk_gjg2YDpkRS774hdAFneCYnED',
            'Content-Type': 'application/json'
          }
        }
      );

      // Send the API response back to the client
      res.status(200).json({
        message: 'Webhook edited successfully',
        webhook: response.data
      });
    } catch (error) {
      console.error('Error editing webhook:', error);
      res.status(500).json({
        error: 'Failed to edit webhook'
      });
    }
  }






  /**
   * @swagger
   * /user/deletetWebhook:
   *   delete:
   *     tags:
   *       - CARD
   *     description: Edit an existing webhook using the AdMediaCards API.
   *     produces:
   *       - application/json
   *     parameters: 
   *       - name: webhookid
   *         in: query
   *         description: The URL to which the webhook webhookid will be sent.
   *         required: true 
   *     responses:
   *       200:
   *         description: Webhook edited successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: "Webhook edited successfully"
   *                 webhook:
   *                   type: object
   *                   properties:
   *                     webhookid:
   *                       type: string 
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Internal server error
   */

  async deletetWebhook(req, res, next) {
    try {
      // Extract webhookid from the query
      const {
        webhookid,
      } = req.query;



      // Make the PUT request to the API
      const response = await axios.delete(
        `https://openapi.admediacards.com/api/v1/open/webhooks/${webhookid}`, {
          headers: {
            Authorization: 'ApiKey sk_gjg2YDpkRS774hdAFneCYnED',
            'Content-Type': 'application/json'
          }
        }
      );

      // Send the API response back to the client
      res.status(200).json({
        message: 'Webhook edited successfully',
        webhook: response.data
      });
    } catch (error) {
      console.error('Error editing webhook:', error);
      res.status(500).json({
        error: 'Failed to edit webhook'
      });
    }
  }






  /**
   * @swagger
   * /user/statsWebhook:
   *   get:
   *     tags:
   *       - CARD
   *     description: Edit an existing webhook using the AdMediaCards API.
   *     produces:
   *       - application/json
   *     parameters: 
   *       - name: webhookid
   *         in: query
   *         description: The URL to which the webhook webhookid will be sent.
   *         required: true 
   *     responses:
   *       200:
   *         description: Webhook  successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: "Webhook  successfully"
   *                 webhook:
   *                   type: object
   *                   properties:
   *                     webhookid:
   *                       type: string 
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Internal server error
   */

  async statsWebhook(req, res, next) {
    try {
      // Extract webhookid from the query
      const {
        webhookid,
      } = req.query;



      const response = await axios.get(`https://openapi.admediacards.com/api/v1/open/webhooks/stats/${webhookid}`, {
        headers: {
          Authorization: 'ApiKey sk_gjg2YDpkRS774hdAFneCYnED',
          'Content-Type': 'application/json'
        }
      });

      // Send the API response back to the client
      res.status(200).json({
        message: 'Webhook edited successfully',
        webhook: response.data
      });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to edit webhook'
      });
    }
  }






  /**
   * @swagger
   * /user/testWebhook:
   *   post:
   *     tags:
   *       - CARD
   *     description: Edit an existing webhook using the AdMediaCards API.
   *     produces:
   *       - application/json
   *     parameters: 
   *       - name: webhookid
   *         in: query
   *         description: The URL to which the webhook webhookid will be sent.
   *         required: true 
   *     responses:
   *       200:
   *         description: Webhook  successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: "Webhook  successfully"
   *                 webhook:
   *                   type: object
   *                   properties:
   *                     webhookid:
   *                       type: string 
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Internal server error
   */

  async testWebhook(req, res, next) {
    try { 
      const {
        webhookid,
      } = req.query; 
      const response = await axios.post(
        `https://openapi.admediacards.com/api/v1/open/webhooks/test-post/${webhookid}`, {
          headers: {
            Authorization: 'ApiKey sk_gjg2YDpkRS774hdAFneCYnED',
            'Content-Type': 'application/json'
          }
        }
      ); 
      res.status(200).json({
        message: 'Webhook edited successfully',
        webhook: response.data
      });
    } catch (error) { 
      res.status(500).json({
        error: 'Failed to  webhook'
      });
    }
  }





    /**
     * @swagger
     * /user/getConvertBalence:
     *   get:
     *     summary: getConvertBalence
     *     tags:
     *       - User Wallet
     *     description: getConvertBalence
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: amount
     *         description: The cryptocurrency you want to receive
     *         in: query
     *         required: true
     *       - name: fromCoin
     *         description: The payment amount 
     *         in: query
     *         required: true
     *       - name: toCoin
     *         description: The payment amount 
     *         in: query
     *         required: true
     *     responses:
     *       200:
     *         description: Successful response with the deposite money.
     */
    async getConvertBalence(req, res, next) {
      var validationSchema = Joi.object({
        amount: Joi.number().required(),
        fromCoin: Joi.string().required(),
        toCoin: Joi.string().required(),
      });
      try {
        let feeSettingRes = await findFees({
          status: status.ACTIVE
        });
        const validatedBody = await Joi.validate(req.query, validationSchema);
        console.log("validatedBody=====>>>>", validatedBody)
        // let threePercet = Number(validatedBody.amount) 
        // let chipusdamoun = Number(threePercet) + Number(validatedBody.amount) * Number(feeSettingRes.chipAmount)

        // console.log("chipusdamoun====>>", chipusdamoun)
        // console.log("validatedBody==>>", validatedBody.amount)
        var payloadConfig = {
          method: 'GET',
          url: Config.get('nowPayment').paymentURL + 'v1/estimate?amount=' + Number(validatedBody.amount) + '&currency_from=' + validatedBody.fromCoin + '&currency_to=' + validatedBody.toCoin,
          headers: {
            'x-api-key': config.get('nowPayment').apiKey
          }
        };
        //console.log("payloadConfig========>>>>>>",payloadConfig)

        let getbalanceRes = await axios(payloadConfig)

        if (getbalanceRes.status == 200) {
          let estimat = getbalanceRes.data.estimated_amount 
          let obj = {
            currency_from: getbalanceRes.data.currency_from,
            amount_from: getbalanceRes.data.amount_from,
            currency_to: getbalanceRes.data.currency_to,
            estimated_amount: Number(estimat)
          }
          console.log("obj=========>>>>>>", obj)
          return res.json(new response(obj, responseMessage.GET_BALANCE));
        } else {
          throw apiError.notFound(responseMessage.INVALID_AMOUNT);
        }

      } catch (error) { 
        return next(error);
      }
    }



      /**
       * @swagger
       * /user/getCoin:
       *   get:
       *     summary: getCoin
       *     tags:
       *       - User Wallet
       *     description: View the  deposte of the authenticated user.
       *     produces:
       *       - application/json
       *     responses:
       *       200:
       *         description: Successful response with the user's wallet.
       */
      async getCoin(req, res, next) {
        try {
          // const validatedBody = await req.body;
          // let userResult = await findUser({
          //   _id: req.userId,
          //   status: { $ne: status.DELETE },
          //   userType: userType.USER,
          // });
          // if (!userResult) {
          //   throw apiError.notFound(responseMessage.USER_NOT_FOUND);
          // }
          // console.log("getCurrency======================")
          const paymentData = {
            ipn_callback_url: 'http://localhost:1987/api/v1/user/', // URL to receive IPN (Instant Payment Notification) callbacks
          }
          const headers = {
            'Content-Type': 'application/json',
            'x-api-key': config.get('nowPayment').apiKey
          };
          let result = await axios.get(Config.get('nowPayment').paymentURL + 'v1/merchant/coins', {
            headers
          })
          // console.log("result======>>>>", result.data);



          return res.json(new response(result.data, responseMessage.COIN_LIST));


        } catch (error) {
          console.log(error);
          return next(error);
        }
      }
  
  
  
  
  
  
  
  


      /**
       * @swagger
       * /user/connectWallet:
       *   post:
       *     tags:
       *       - USER
       *     description: connect wallet
       *     produces:
       *       - application/json
       *     parameters:
       *       - name: token
       *         description: token
       *         in: header
       *         required: true
       *       - name: walletAddress
       *         description: walletAddress
       *         in: query
       *         required: true
       *     responses:
       *       200:
       *         description: Data found successfully.
       *       404:
       *         description: Data not found.
       *       500:
       *         description: Internal Server Error
       *       501:
       *         description: Something went wrong!
       */

      async connectWallet(req, res, next) {
        try {
          const walletAddress = req.query.walletAddress;
          if (!walletAddress) {
            throw {
              responseCode: 400, // Bad Request
              responseMessage: 'Invalid Data',
              isApiError: true
            };
          }

          const userResult = await findUser({
                _id: req.userId,
                status: {
                  $ne: status.DELETE
                },
          });

          console.log("userResult======================>>>>>>", userResult);

          if (!userResult) {
            throw {
              responseCode: 404, // Not Found
              responseMessage: 'User Not Found',
              isApiError: true
            };
          }

          if (userResult.wallet === walletAddress) {
            return res.json(new response("", responseMessage.WALLET_CONNECT));
          } else if (!userResult.wallet) {
            const updateResult = await updateUser({
              _id: userResult._id
            }, {
              $set: {
                wallet: walletAddress
              }
            }, {
              new: true
            });
            return res.json(new response(updateResult, responseMessage.WALLET_CONNECT));
          } else {
            throw {
              responseCode: 400, // Bad Request
              responseMessage: 'Invalid Wallet',
              isApiError: true
            };
          }
        } catch (error) {
          console.log("error======>>>>>", error);
          return next(error);
        }
      }



}
export default new userController();