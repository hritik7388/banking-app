import Mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import userType from "../enums/userType"; 
import status from "../enums/status";
import bcrypt from "bcryptjs"; 
import config from "config";
import boolean from "joi/lib/types/boolean";
const axios = require('axios');

//const arkDetails = require('../../config/arkDetails.json');
const options = {
  collection: "user",
  timestamps: true,
};

const userModel = new Schema(
  {
    fullName: { type: String },
    firstName: { type: String },
    lastName: { type: String }, 
  
    email: { type: String },
    profilePic: { type: String, default: "" },
    coverImage: { type: String, default: "" },
    coverPic: { type: String }, 
    reason: { type: String },
    countryOfResidence: { type: String, },
    countryCode: { type: String },
    country: { type: String },
    mobileNumber: { type: String, required: false }, 
    speakeasyQRcode: {
      type: String
    },
    
    password: { type: String }, 
    otp: { type: Number },
    otp2: { type: Number },
    otpTime: { type: Number },
    ip: { 
      type: String,
      default:"152.16.6.45"
     },
    state: { type: String },
    nickname: { type: String },
    address: { type: String },
    streetName: { type: String },
    buildingName: { type: String }, 
    city: { type: String }, 

    passwordVerification: {
      type: Boolean,
      default: false
    },
     
    speakeasy: { type: Boolean, default: false },
    speakeasyQRcode: { type: String },
    notificationEnable: { type: Boolean, default: false },
    emailAuthentication: { type: Boolean, default: false }, 
    mobileNumberAuthentication: { type: Boolean, default: false },
    emailAuthenticationTime: { type: Number },
    mobileNumberAuthenticationTime: { type: Number },
    emailAuthenticationOTP: { type: Number },
    mobileNumberAuthenticationOTP: { type: Number },
    base32: { type: String },
    userName: { type: String },
    blockedReason: { type: String },
    marketingOfferNotification: { type: Boolean, default: false },
    transactionNotification: { type: Boolean, default: false },
    investmentNewsNotification: { type: Boolean, default: false },
    otpVerification: { type: Boolean, default: false }, 
    userType: {
      type: String,
      enum: [userType.ADMIN, userType.USER, userType.SUB_ADMIN],
      default: userType.USER,
    }, 
    status: {
      type: String,
      enum: [status.ACTIVE, status.BLOCK, status.DELETE],
      default: status.ACTIVE,
    }, 
    otpEmail: { type: Number },
    otpTimeEmail: { type: Number },
    otpVerificationEmail: {
      type: Boolean,
      default: false
    },
    otpMobile: { type: Number },
    otpTimeMobile: { type: Number },
    otpVerificationMobile: {
      type: Boolean,
      default: false
    }, 
    contactUs: {
      countryCode: { type: String },
      instagram: { type: String },
      twitter: { type: String },
      facebook: { type: String },
      website: { type: String },
    },
    notificationPermission: {
      type: [{
        marketingOffers: {
          type: Boolean,
          require: true
        },
        transactions: {
          type: Boolean,
          require: true
        },
        investmentNews: {
          type: Boolean,
          require: true
        }
      }],
      require: false
    },
  
    deviceToken: { type: String },
    deviceType: { type: String }, 
    totalSaving:{
      type:Number,
      default:0
    },   
  },
  options
);
userModel.plugin(mongoosePaginate);
userModel.plugin(mongooseAggregatePaginate);
module.exports = Mongoose.model("user", userModel);

(async () => {
  try {
    const result = await Mongoose.model("user", userModel).find({
      userType: userType.ADMIN,
    });
    if (result.length != 0) {
      console.log("Default Admin 😀 .");
    } else {
      const createdRes = await Mongoose.model("user", userModel).create({
        userType: "ADMIN",
        fullName: "HRITIK BHADAURIA",
        countryCode: "+91",
        mobileNumber: "7388503329",
        email: "choreohritik52@gmail.com",
        dateOfBirth: "20/08/2000",
        gender: "Male",
        password: bcrypt.hashSync("Choreohritik52@"),
        address: "Okhala, Delhi, India",
        contactUs: {
          countryCode: "+91",
          mobileNumber: "7388503329",
          instagram: "https://www.instagram.com",
          twitter: "https://www.twitter.com",
          facebook: "https://www.facebook.com",
          website: "https://www.website.com",
        },
      });
      if (createdRes) {
        console.log("DEFAULT ADMIN Created 😀 ", createdRes);
      }
    }
  } catch (error) {
    console.log("Admin error===>>", error);
  }
}).call();










