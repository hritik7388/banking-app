import Joi from "joi";
import _ from "lodash";
import Country from "../../../../models/bankCountry.js";
const axios = require("axios"); 
import userModel from "../../../../models/user.js";
import User from "../../../../models/user.js"; 
import bankCountry from "../../../../models/bankCountry.js";
import userAccount from "../../../../models/userAccount.js"; 
const { ObjectId } = require("mongodb");
import transactionHistry from "../../../../models/transactionHistory.js"; 
import notification from "../../../../models/notification.js";
import transactionNotification from "../../../../models/transactionNotification.js";
import transactionRecord from "../../../../models/transactionHistory.js"; 
import apiError from "../../../../helper/apiError";
import response from "../../../../../assets/response";
import bcrypt from "bcryptjs";
import responseMessage from "../../../../../assets/responseMessage";

import commonFunction from "../../../../helper/util";
import status from "../../../../enums/status";
import userType from "../../../../enums/userType"; 
import sendNotification from "../../../../helper/notificationUtil"; 
import dotenv from "dotenv";
dotenv.config(); 
// ******************* Importing services *************************************//
import { userServices } from "../../services/user"; 
import { notificationServices } from "../../services/notification"; 
import { supportServices } from "../../services/supportTicket"; 
import fs from "fs";
import crypto from "crypto"; 

import { from } from "form-data";
import array from "joi/lib/types/array";
import mongoose from "mongoose";
import { title } from "process";
const {
  checkUserExists,
  allactiveUser,
  createUser,
  findUser,
  userFindList,
  deleteUser,
  findfollowers,
  findfollowing,
  emailMobileExist,
  findUserData,
  updateUser,
  updateUserById,
  paginateSearch,
  paginateSearchAdmin,
  paginateSearchUser,
  paginateLoanUser,
  userAllDetails,
  findCount,
  aggregateSearchUser,
} = userServices;
 
 
 
const {
  createSupport,
  findSupport,
  updateSupport,
  supportList,
  paginateSearchSupport,
  aggregateSearchSupport,
} = supportServices;
 
 
 
//******************************************************************************/

export class adminController {
  /**
   * @swagger
   * /admin/login:
   *   post:
   *     tags:
   *       - ADMIN
   *     description: Admin login with email and Password
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: login
   *         description: login
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Adminlogin'
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async login(req, res, next) {
    var validationSchema = {
      email: Joi.string().required(),
      password: Joi.string().required(),
      deviceToken: Joi.string().optional(),
      deviceType: Joi.string().optional(),
    };
    try {
      if (req.body.email) {
        req.body.email = req.body.email.toLowerCase();
      }
      var results;
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const { email, password } = validatedBody;
      let userResult = await findUser({
        email: email,
        userType: { $ne: userType.USER },
        status: { $ne: status.DELETE },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      if (!bcrypt.compareSync(password, userResult.password)) {
        throw apiError.conflict(responseMessage.INCORRECT_LOGIN);
      } else {
        var token = await commonFunction.getToken({
          _id: userResult._id,
          email: userResult.email,
          mobileNumber: userResult.mobileNumber,
          userType: userResult.userType,
        });
        results = {
          _id: userResult._id,
          email: email,
          speakeasy: userResult.speakeasy,
          userType: userResult.userType,
          token: token,
        };
      }
      return res.json(new response(results, responseMessage.LOGIN));
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
 
  /**
   * @swagger
   * /admin/updateAdminProfile:
   *   put:
   *     tags:
   *       - ADMIN
   *     description: updateAdminProfile with all basic details he Want to update in future
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: email
   *         description: email
   *         in: formData
   *         required: false
   *       - name: firstName
   *         description: firstName
   *         in: formData
   *         required: false
   *       - name: lastName
   *         description: lastName
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
   *       - name: profilePic
   *         description: profilePic
   *         in: formData
   *         required: false
   *       - name: address
   *         description: address
   *         in: formData
   *         required: false
   *       - name: city
   *         description: city
   *         in: formData
   *         required: false
   *       - name: country
   *         description: country
   *         in: formData
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async updateAdminProfile(req, res, next) {
    const validationSchema = {
      firstName: Joi.string().allow("").optional(),
      lastName: Joi.string().allow("").optional(),
      email: Joi.string().allow("").optional(),
      countryCode: Joi.string().allow("").optional(),
      mobileNumber: Joi.string().allow("").optional(),
      profilePic: Joi.string().allow("").optional(),
      address: Joi.string().allow("").optional(),
      city: Joi.string().allow("").optional(),
      country: Joi.string().allow("").optional(),
    };
    try {
      console.log("gdgdjgdjdg");
      if (req.body.email) {
        req.body.email = req.body.email.toLowerCase();
      }
      let validatedBody = await Joi.validate(req.body, validationSchema);

      let userResult = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
        userType: userType.ADMIN,
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      if (validatedBody.profilePic) {
        validatedBody.profilePic = validatedBody.profilePic;
        // validatedBody.profilePic = await commonFunction.getSecureUrl(validatedBody.profilePic);
      }
      if (validatedBody.mobileNumber) {
        let uniqueCheck = await findUser({
          mobileNumber: validatedBody.mobileNumber,
          _id: { $ne: userResult._id },
          status: { $ne: status.DELETE },
        });
        if (uniqueCheck) {
          throw apiError.conflict(responseMessage.MOBILE_EXIST);
        }
      }
      await updateUser({ _id: userResult._id }, validatedBody);
      return res.json(new response({}, responseMessage.PROFILE_UPDATED));
    } catch (error) {
      console.log("error", error);
      return next(error);
    }
  }
 
 

  /**
   * @swagger
   * /admin/verifyOTP:
   *   post:
   *     tags:
   *       - ADMIN
   *     description: Verify OTP by an admin for password reset
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: OTP verification details
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             email:
   *               type: string
   *               description: Admin's email
   *             otp:
   *               type: integer
   *               description: OTP (One-Time Password) for verification
   *     responses:
   *       200:
   *         description: Returns user details and authentication token upon successful OTP verification
   */

  async verifyOTP(req, res, next) {
    var validationSchema = {
      email: Joi.string().required(),
      otp: Joi.number().required(),
    };
    try {
      if (req.body.email) {
        req.body.email = req.body.email.toLowerCase();
      }
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const { email, otp } = validatedBody;
      var userResult = await findUserData({
        email: email,
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
      var updateResult = await updateUser(
        { _id: userResult._id },
        { accountVerify: true }
      );
      var token = await commonFunction.getToken({
        id: updateResult._id,
        email: updateResult.email,
        mobileNumber: updateResult.mobileNumber,
        userType: updateResult.userType,
      });
      var obj = {
        _id: updateResult._id,
        email: updateResult.email,
        token: token,
      };
      return res.json(new response(obj, responseMessage.OTP_VERIFY));
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @swagger
   * /admin/forgotPassword:
   *   post:
   *     tags:
   *       - ADMIN
   *     description: Admin initiates the forgot password process
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Forgot password details
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             email:
   *               type: string
   *               description: Admin's email address
   *     responses:
   *       200:
   *         description: Returns success message after initiating the forgot password process
   */

  async forgotPassword(req, res, next) {
    var validationSchema = {
      email: Joi.string().required(),
    };
    try {
      if (req.body.email) {
        req.body.email = req.body.email.toLowerCase();
      }
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const { email } = validatedBody;
      var userResult = await findUser({
        email: email,
        status: { $ne: status.DELETE },
        userType: userType.ADMIN,
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      } else {
        var otp = commonFunction.getOTP();
        var newOtp = otp;
        var time = Date.now() + 180000;
        await commonFunction.sendMailOtpNodeMailer(email, otp);
        var updateResult = await updateUser(
          { _id: userResult._id },
          { $set: { otp: newOtp, otpTime: time } }
        );
        return res.json(new response({}, responseMessage.OTP_SEND));
      }
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  /**
   * @swagger
   * /admin/resetPassword:
   *   post:
   *     tags:
   *       - ADMIN
   *     description: Change password or reset password When ADMIN need to chnage
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: password
   *         description: password
   *         in: formData
   *         required: true
   *       - name: confirmPassword
   *         description: confirmPassword
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
      const { password, confirmPassword } = await Joi.validate(
        req.body,
        validationSchema
      );
      var userResult = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
        userType: userType.ADMIN,
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      } else {
        if (password == confirmPassword) {
          let update = await updateUser(
            { _id: userResult._id },
            { password: bcrypt.hashSync(password) }
          );
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
   * /admin/resendOTP:
   *   put:
   *     tags:
   *       - ADMIN
   *     description: after OTP expire or not get any OTP with that frameOfTime ADMIN resendOTP for new OTP
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: resendOTP
   *         description: resendOTP
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *              email:
   *                type: string
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async resendOTP(req, res, next) {
    var validationSchema = {
      email: Joi.string().required(),
    };
    try {
      if (req.body.email) {
        req.body.email = req.body.email.toLowerCase();
      }
      var validatedBody = await Joi.validate(req.body, validationSchema);
      const { email } = validatedBody;

      var userResult = await findUser({
        email: email,
        status: { $ne: status.DELETE },
        userType: userType.ADMIN,
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      var otp = commonFunction.getOTP();
      var otpTime = new Date().getTime() + 180000;
      await commonFunction.sendMailOtpNodeMailer(email, otp);
      // await commonFunction.sendMailOtpForgetAndResend(email, otp);
      var updateResult = await updateUser(
        { _id: userResult._id },
        { otp: otp, otpTime: otpTime }
      );
      return res.json(new response({}, responseMessage.OTP_SEND));
    } catch (error) {
      console.log(error.message);
      return next(error);
    }
  }

  /**
   * @swagger
   * /admin/changePassword:
   *   patch:
   *     tags:
   *       - ADMIN
   *     description: changePassword By ADMIN when ADMIN want to change his password on Plateform
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: changePassword
   *         description: changePassword
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/changePassword'
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async changePassword(req, res, next) {
    const validationSchema = {
      oldPassword: Joi.string().required(),
      newPassword: Joi.string().required(),
    };
    try {
      let validatedBody = await Joi.validate(req.body, validationSchema);
      let userResult = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
        userType: userType.ADMIN,
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
   * /admin/adminProfile:
   *   get:
   *     tags:
   *       - ADMIN
   *     description: get his own profile details with adminProfile API
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
  async adminProfile(req, res, next) {
    try {
      let adminResult = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
        userType: { $ne: userType.USER },
      });
      if (!adminResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      adminResult = _.omit(
        JSON.parse(JSON.stringify(adminResult)),
        "otp",
        "otpTime",
        "password",
        "__v"
      );

      return res.json(new response(adminResult, responseMessage.USER_DETAILS));
    } catch (error) {
      return next(error);
    }
  }
  //*************SUB ADMIN MANAGEMENT*****************/

  
//  ********USER MANAGEMENT*****************/

  /**
   * @swagger
   * /admin/viewUser:
   *   get:
   *     tags:
   *       - ADMIN_USER_MANAGEMENT
   *     description: view basic Details of any USER with _id
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: _id
   *         description: _id
   *         in: query
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async viewUser(req, res, next) {
    const validationSchema = {
      _id: Joi.string().required(),
    };
    try {
      const validatedBody = await Joi.validate(req.query, validationSchema);
      let userResult = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
        userType: userType.ADMIN,
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      var userInfo = await findUser({
        _id: validatedBody._id,
        status: { $ne: status.DELETE },
      });
      console.log("userInfo==>>>>", userInfo);
      if (!userInfo) {
        throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
      }
      let result = [];
      let walletRes = await walletList({
        userId: userInfo._id,
        status: { $ne: status.DELETE },
      });
      userInfo = _.omit(
        JSON.parse(JSON.stringify(userInfo)),
        "otp",
        "otpTime",
        "password",
        "__v"
      );
      result.push(userInfo);
      result.push(walletRes);
      return res.json(new response(result, responseMessage.DATA_FOUND));
    } catch (error) {
      if (error.isJoi) {
        return res.status(400).json({ error: error.details[0].message });
      } else {
        return next(error);
      }
    }
  }

  /**
   * @swagger
   * /admin/deleteUser:
   *   delete:
   *     tags:
   *       - ADMIN_USER_MANAGEMENT
   *     description: deleteUser When Admin want to delete Any USER from plateform
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: deleteUser
   *         description: deleteUser
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/deleteUser'
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async deleteUser(req, res, next) {
    const validationSchema = {
      _id: Joi.string().required(),
    };
    try {
      const validatedBody = await Joi.validate(req.body, validationSchema);
      let userResult = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
        userType: userType.ADMIN,
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      var userInfo = await findUser({
        _id: validatedBody._id,
        userType: { $ne: "ADMIN" },
        status: { $ne: status.DELETE },
      });
      if (!userInfo) {
        throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
      }
      let deleteRes = await updateUser(
        { _id: userInfo._id },
        { status: status.DELETE }
      );
      return res.json(new response({}, responseMessage.DELETE_SUCCESS));
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @swagger
   * /admin/blockUnblockUser:
   *   put:
   *     tags:
   *       - ADMIN_USER_MANAGEMENT
   *     description: blockUnblockUser When ADMIN want to block User or Unblock USER on Plateform
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: blockUnblockUser
   *         description: blockUnblockUser
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/blockUnblockUser'
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async blockUnblockUser(req, res, next) {
    const validationSchema = {
      _id: Joi.string().required(),
    };
    try {
      const validatedBody = await Joi.validate(req.body, validationSchema);
      let userResult = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
        userType: userType.ADMIN,
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      var userInfo = await findUser({
        _id: validatedBody._id,
        userType: { $ne: "ADMIN" },
        status: { $ne: status.DELETE },
      });
      if (!userInfo) {
        throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
      }
      if (userInfo.status == status.ACTIVE) {
        let blockRes = await updateUser(
          { _id: userInfo._id },
          { status: status.BLOCK }
        );
        let senderNotificationObj = {
          userId: userInfo._id,
          type: "NOTIFICATION",
          title: "Account Blocked",
          message: "Your Account has been blocked by admin !",
        };
        await notificationCreate(senderNotificationObj);
        return res.json(new response({}, responseMessage.BLOCK_BY_ADMIN));
      } else {
        let activeRes = await updateUser(
          { _id: userInfo._id },
          { status: status.ACTIVE }
        );
        let senderNotificationObj = {
          userId: userInfo._id,
          type: "NOTIFICATION",
          title: "Account Unblocked",
          message: "Your Account has been Unblocked by admin !",
        };
        await notificationCreate(senderNotificationObj);
        return res.json(new response({}, responseMessage.UNBLOCK_BY_ADMIN));
      }
    } catch (error) {
      return next(error);
    }
  } 
  /**
   * @swagger
   * /admin/listUser:
   *   get:
   *     tags:
   *       - ADMIN_USER_MANAGEMENT
   *     description: List of all USER on plateform by ADMIN Call this listuser API
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: status1
   *         description: status1
   *         in: query
   *         required: false
   *       - name: search
   *         description: search
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
   *       - name: kycStatus
   *         description: kycStatus is PENDING || REJECT ||APPROVE || NOT_APPLIED
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
  async listUser(req, res, next) {
    const validationSchema = {
      status1: Joi.string().allow("").optional(),
      search: Joi.string().allow("").optional(),
      fromDate: Joi.string().allow("").optional(),
      toDate: Joi.string().allow("").optional(),
      page: Joi.number().allow("").optional(),
      limit: Joi.number().allow("").optional(),
      kycStatus: Joi.string().allow("").optional(),
    };
    try {
      const validatedBody = await Joi.validate(req.query, validationSchema);
      let userResult = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
        userType: userType.ADMIN,
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }

      let dataResults = await paginateSearch(validatedBody);
      if (dataResults.docs.length == 0) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      return res.json(new response(dataResults, responseMessage.DATA_FOUND));
      console.log();
    } catch (error) {
      console.log("error===>>>>", error);
      return next(error);
    }
  }
  /**
   * @swagger
   * /admin/userList:
   *   get:
   *     tags:
   *       - ADMIN_USER_MANAGEMENT
   *     description: List of all USER on plateform by ADMIN Call this listuser API
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: status1
   *         description: status1
   *         in: query
   *         required: false
   *       - name: search
   *         description: search
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
   *       - name: kycStatus
   *         description: kycStatus is PENDING || REJECT ||APPROVE || NOT_APPLIED
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
  async userList(req, res, next) {
    const validationSchema = {
      status1: Joi.string().allow("").optional(),
      search: Joi.string().allow("").optional(),
      fromDate: Joi.string().allow("").optional(),
      toDate: Joi.string().allow("").optional(),
      page: Joi.number().allow("").optional(),
      limit: Joi.number().allow("").optional(),
      kycStatus: Joi.string().allow("").optional(),
    };
    try {
      const validatedBody = await Joi.validate(req.query, validationSchema);
      let userResult = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }

      let dataResults = await paginateSearchUser(validatedBody);
      if (dataResults.docs.length == 0) {
        throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
      }
      return res.json(new response(dataResults, responseMessage.DATA_FOUND));
      // console.log();
    } catch (error) {
      console.log("error===>>>>", error);
      return next(error);
    }
  }

 
 
 
  
 
  
  /**
   * @swagger
   * /admin/dashboard:
   *   get:
   *     summary: dashboard
   *     tags:
   *       - ADMIN
   *     description: dashboard section for all counts of USER,PENDING_KYC,APPROVE_KYC,ACTIVE_USER,BLOCK_USER,TOTAL Counts
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: timeFrame
   *         description: timeFrame
   *         in: query
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async dashboard(req, res, next) {
    try {
      let admin = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
        userType: { $ne: userType.USER },
      });
      if (!admin) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      let [
        kycSubmitted,
        pendingKyc,
        rejectedKyc,
        totalStake,
        allSuccessTransaction,
      ] = await Promise.all([
        KYCCount({ approveStatus: kycApprove.APPROVE }),
        KYCCount({ isApplyed: true, approveStatus: kycApprove.PENDING }),
        KYCCount({ approveStatus: kycApprove.REJECT }),
        allStakeCount({ isWithdraw: true }),
        alltransactionCount({ transStatusType: transactionStatusType.SUCCESS }),
      ]);
      //**************** totalUserCryptoBal************/
      let totalUserCryptoBal = await walletList({
        status: { $ne: status.DELETE },
        coinType: { $ne: coinType.USD },
      });
      let totalBal = [];
      for (let element of totalUserCryptoBal) {
        totalBal.push(await element.balance);
      }
      let userCryptoBal = totalBal.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      //**************** totalUserFiatBal************/
      let totalUserFiatBal = await walletList({
        status: { $ne: status.DELETE },
        coinType: coinType.USD,
      });
      let totalFiatBal = [];
      for (let element of totalUserFiatBal) {
        totalFiatBal.push(await element.balance);
      }
      let userFiatBal = totalFiatBal.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      //**************** totalUserBal************/
      let totalUserBal = userFiatBal + userCryptoBal;
      //**************** earningAmount************/
      let adminEarning = await feeList({ status: { $ne: status.DELETE } });
      let earningBAl = [];
      for (let element of adminEarning) {
        earningBAl.push(await element.earning);
      }
      let totalEarning = earningBAl.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      ///***********************Active subscribed */
      const validatedBody = await Joi.validate(req.query);
      let startDate;
      switch (validatedBody.timeFrame) {
        case "today":
          startDate = new Date(Date.now());
          // startDate.setHours(0, 0, 0, 0);

          break;
        case "yesterday":
          startDate = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
          break;
        case "3days":
          startDate = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
          break;
        case "30days":
          startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          break;
        case "thisMonth":
          const currentDate = new Date();
          const firstDateOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
          );
          startDate = firstDateOfMonth;
          break;
          const currentMonth = firstDateOfMonth.getMonth();
          const currentYear = firstDateOfMonth.getFullYear();
          var month = currentMonth;
          var year = currentYear;
          var day = 1;
          var dateWithDay = await new Date(year, month, day + 1);
          startDate = dateWithDay;
          break;
        case "3months":
          startDate = new Date(Date.now() - 3 * 30 * 24 * 60 * 60 * 1000);
          break;
        case "9months":
          startDate = new Date(Date.now() - 9 * 30 * 24 * 60 * 60 * 1000);
          break;
        case "6months":
          startDate = new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000);
          break;
        case "1year":
          startDate = new Date(Date.now() - 12 * 30 * 24 * 60 * 60 * 1000);
          break;
        default:
          startDate = new Date();
          break;
      }

      // startDate.setHours(0,0,0,0)
      startDate.setUTCHours(0, 0, 0, 0);

      // console.log("startDatestartDatestartDatestartDate",startDate)

      let activeSubscribed = await subscriptionBuyed.countDocuments({
        status: "ACTIVE",
        createdAt: { $gte: startDate },
      });
      let lostSubscribed = await subscriptionBuyed.countDocuments({
        status: "DISABLE",
        createdAt: { $gte: startDate },
      });
      let activeUser = await userModel.countDocuments({
        userType: userType.USER,
        status: "ACTIVE",
        createdAt: { $gte: startDate },
      });
      let accountRegisterd = await userModel.countDocuments({
        userType: userType.USER,
        //email: { $exists: true, $ne: "" },
        status: "ACTIVE",
        createdAt: { $gte: startDate },
      });

      let obj = {
        activeUser: activeUser,
        accountRegisterd: accountRegisterd,
        totalStake: totalStake,
        activeSubscribed: activeSubscribed,
        lostSubscribed: lostSubscribed,
        allSuccessTransaction: allSuccessTransaction,
        earningAmount: totalEarning,
        kyc: {
          totalPending: pendingKyc,
          totalApproved: kycSubmitted,
          totalReject: rejectedKyc,
        },
        totalUserBal: totalUserBal,
        totalUserCryptoBal: userCryptoBal,
        totalUserFiatBal: userFiatBal,
        totalAdminBal: 0,
        totalAdminCryptoBal: 0,
        totalAdminFiatBal: 0,
      };
      return res.json(new response(obj, responseMessage.DATA_FOUND));
    } catch (error) {
      console.log("error===>>>", error);
      return next(error);
    }
  }
  //**********************Support And Ticket********************* */

  /**
   * @swagger
   * /admin/replySupportTicket:
   *   put:
   *     tags:
   *       - ADMIN SUPPORT & TICKET
   *     description: replySupportTicket
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: supportId
   *         description: supportId
   *         in: formData
   *         required: false
   *       - name: isclose
   *         description: isclose
   *         in: formData
   *         type: boolean
   *         required: false
   *       - name: comment
   *         description: comment
   *         in: formData
   *         required: false
   *       - name: documentUrl
   *         description: documentUrl
   *         in: formData
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async replySupportTicket(req, res, next) {
    try {
      const validatedBody = await Joi.validate(req.body);
      const userResult = await findUser({
        _id: req.userId,
        userType: { $in: userType.ADMIN },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      let resData = await findSupport({
        _id: validatedBody.supportId,
        isclose: false,
      });
      if (!resData) {
        throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
      }
      if (validatedBody.documentUrl) {
        validatedBody.documentUrl = validatedBody.documentUrl;
        // validatedBody.documentUrl = await commonFunction.getSecureUrl( validatedBody.documentUrl);
      }
      let result = await updateSupport(
        { _id: resData._id },
        {
          $push: {
            message: {
              comment: validatedBody.comment,
              documentUrl: validatedBody.documentUrl,
              isAdminReply: true,
              isUserReply: false,
            },
          },
          isclose: validatedBody.isclose,
        }
      );
      return res.json(new response(result, responseMessage.ADD_SUPPORT));
    } catch (error) {
      return next(error);
    }
  }
  /**
   * @swagger
   * /admin/listSupportTicket:
   *   get:
   *     tags:
   *       - ADMIN_SUPPORT_&_TICKET
   *     description: replySupportTicket
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: search
   *         description: search
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
  async listSupportTicket(req, res, next) {
    try {
      const validatedBody = await Joi.validate(req.query);
      const userResult = await findUser({
        _id: req.userId,
        userType: { $in: userType.ADMIN },
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      let resData = await aggregateSearchSupport(validatedBody);
      if (resData.docs.length === 0) {
        throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
      } else {
        return res.json(new response(resData, responseMessage.DATA_FOUND));
      }
    } catch (error) {
      return next(error);
    }
  }
  /**
   * @swagger
   * /admin/viewSupportTicket:
   *   get:
   *     tags:
   *       - ADMIN_SUPPORT_&_TICKET
   *     description: viewWithdraw ,all list of particular user data
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: supportId
   *         description: supportId
   *         in: query
   *         required: true
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async viewSupportTicket(req, res, next) {
    try {
      let userResult = await findUser({
        _id: req.userId,
        userType: userType.ADMIN,
        status: { $ne: status.DELETE },
      });
      if (!userResult) throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      let result = await findSupport({
        _id: req.query.supportId,
        status: { $ne: status.DELETE },
      });
      if (!result) throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
      return res.json(new response(result, responseMessage.DATA_FOUND));
    } catch (error) {
      return next(error);
    }
  }
  
 
 

  ///**************************Coin Management*************** */
  /**
   * @swagger
   * /admin/listCoin:
   *   get:
   *     tags:
   *       - ADMIN_COIN_MANAGEMENT
   *     description: listCoin ,all list of particular user data
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
  async listCoin(req, res, next) {
    try {
      let userResult = await findUser({
        _id: req.userId,
        userType: { $in: userType.ADMIN },
      });
      if (!userResult) throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      let coinResult = await coinList({ status: { $ne: status.DELETE } });
      if (coinResult.length <= 0) {
        throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
      } else {
        return res.json(new response(coinResult, responseMessage.DATA_FOUND));
      }
    } catch (error) {
      return next(error);
    }
  }
  /**
   * @swagger
   * /admin/updateCoinPermission:
   *   put:
   *     tags:
   *       - ADMIN_COIN_MANAGEMENT
   *     description: updateCoinPermission
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name: coinPermission
   *         description: update coin Permission
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/coinPermission'
   *     responses:
   *       200:
   *         description: Returns success message
   */
  async updateCoinPermission(req, res, next) {
    try {
      const validatedBody = await Joi.validate(req.body);
      let userResult = await findUser({
        _id: req.userId,
        status: { $ne: status.DELETE },
        userType: userType.ADMIN,
      });
      if (!userResult) {
        throw apiError.notFound(responseMessage.USER_NOT_FOUND);
      }
      validatedBody.permissions.forEach((element) => {
        console.log("first=========>>>>", element.coinId);
      });
      for (let element of validatedBody.permissions) {
        let coinRes = await findCoin({
          _id: element.coinId,
          status: { $ne: status.DELETE },
        });
        if (coinRes) {
          await updateCoin(
            { _id: coinRes._id },
            { permission: element.permission }
          );
        }
      }
      return res.json(new response({}, responseMessage.UPDATE_SUCCESS));
    } catch (error) {
      console.log("error", error);
      return next(error);
    }
  }
 
 
 
 
 
 
 

  /**
   * @swagger
   * /admin/sendAllUserNotification:
   *   put:
   *     tags:
   *       - ADMIN
   *     description: sendAllUserNotification
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: token
   *         in: header
   *         required: true
   *       - name:  title
   *         description:  title
   *         in: query
   *         required: false
   *       - name:  description
   *         description:  description
   *         in: query
   *         required: false
   *     responses:
   *       200:
   *         description: Returns success message
   */

  async sendAllUserNotification(req, res) {
    const validationSchema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
    });

    try {
      // Validate request query parameters
      const validatedQuery = await Joi.validate(req.query, validationSchema);

      // Check if the user making the request is an admin
      const adminResult = await findUser({
        _id: req.userId,
        userType: userType.ADMIN,
      });
      if (!adminResult) {
        throw new Error(responseMessage.UNAUTHORIZED);
      }

      // Find all users with userType.USER and retrieve their deviceToken
      const users = await userModel.find(
        { userType: userType.USER },
        "deviceToken"
      );

      for (const user of users) {
        console.log("User:", user);
        if (!user.deviceToken || typeof user.deviceToken !== "string") {
          continue; // Skip users without a valid deviceToken
        }

        // Create transaction notification entry
        const notification = await transactionNotification.create({
          title: validatedQuery.title,
          description: validatedQuery.description,
          type: "custom",
          userId: user._id,
        });
        // Send push notification
        commonFunction.pushNotification(
          user.deviceToken,
          validatedQuery.title,
          validatedQuery.description,
          [],
          (error, response) => {
            if (error) {
              console.error(
                "Error sending push notification to user:",
                user._id,
                error
              );
            } else {
              console.log(
                "Push notification sent successfully to user:",
                user._id
              );
            }
          }
        );
      }

      // Respond with success message
      res.status(200).json({
        responseCode: 200,
        success: true,
        message: "Notifications sent successfully to all users",
      });
    } catch (error) {
      // Handle errors
      console.error("Error sending notifications:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send notifications",
        error: error.message,
      });
    }
  }
}

export default new adminController();
 