import Express from "express";
import controller from "./controller";
import auth from "../../../../helper/auth";
import upload from "../../../../helper/uploadHandler";

export default Express.Router()


   // // *********************USER*********************/

   .use(upload.uploadFile)
   .post('/getImageUrl', controller.getImageUrl)

   .post("/signUp", controller.signUp)
   .patch("/verifyOTP", controller.verifyOTP)
   .post("/login", controller.login)
   .post("/forgotPassCode", controller.forgotPassCode)
   .post("/verifyEmailOtp", controller.verifyEmailOtp)
   .post("/verifyMobileOtp", controller.verifyMobileOtp)

   .post("/resendMobileOTP", controller.resendMobileOTP)
   .post("/resendEmailOTP", controller.resendEmailOTP)



   .use(auth.verifyToken)

   .get("/viewProfile", controller.viewProfile)
   .put("/updatePasscode", controller.updatePasscode)
   .post("/applyKYC", controller.applyKYC)
   .get("/getReferralList", controller.getReferralList)
   .post("/addInvitationLink", controller.addInvitationLink)
   .post("/addFriendRequest", controller.addFriendRequest)

   .post("/acceptFriendRequest", controller.acceptFriendRequest)
   .get("/getFriendRequestListSent", controller.getFriendRequestListSent)

   
   .put("/editProfile", controller.editProfile)
