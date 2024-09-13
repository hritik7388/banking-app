import Express from "express";
import controller from "./controller";
import auth from "../../../../helper/auth";
import upload from "../../../../helper/uploadHandler";

export default Express.Router()
  .use(upload.uploadFile)
  .post("/uploadImageFile", controller.uploadImageFile)

  //=============================================>>>card=====================//
  .get("/getCardBalance", controller.getCardBalance)
  .get("/getCardProfile", controller.getCardProfile)
  .get("/getCardProgram", controller.getCardPrgram)
  .get("/getListCard", controller.getListCard)
  .post("/addCard", controller.addCard)
  .put("/updateCard", controller.updateCard)
  .post("/cardNote", controller.cardNote)
  .get("/getTransactionsList", controller.getTransactionsList)
  .get("/getTransactionsCardList", controller.getTransactionsCardList)
  .get("/getInternalTransactionList", controller.getInternalTransactionList)
  .get("/listWebhooks", controller.listWebhooks)
  .post("/addWebhook", controller.addWebhook)
  .put("/editWebhook", controller.editWebhook)
  .delete("/deletetWebhook", controller.deletetWebhook)
  .get("/statsWebhook", controller.statsWebhook)
  .post("/testWebhook", controller.testWebhook)
  .get("/getConvertBalence", controller.getConvertBalence)
  .get("/getCoin", controller.getCoin)
  // *********************USER*********************/
  
  .post("/signUp", controller.signUp)
  
  .patch("/verifyOTP", controller.verifyOTP)
  .post("/resendOTP", controller.resendOTP)
  .post("/forgotPassCode", controller.forgotPassCode)
  
  .post("/login", controller.login) 
  .post("/checkUser", controller.checkUser)
  
  .post("/verifyTwoAuthentication", controller.verifyTwoAuthentication)
  .put("/resendOTPForgotPasscode", controller.resendOTPForgotPasscode)
  .get("/isUserExist", controller.isUserExist)   
  .get("/invoiceDownload", controller.invoiceDownload) 
  .delete("/deleteUserAccount", controller.deleteUserAccount)
  .get("/listAllUser", controller.listAllUser) 
  .post("/resetPassword", controller.resetPassword) 
  .patch("/changePassword", controller.changePassword) 
  .get("/getBankCountries", controller.getBankCountries) 
  .get("/googleAuthenticationDisable", controller.googleAuthenticationDisable)
  .get(
    "/enableDisableEmailMobileNumberAuth",
    controller.enableDisableEmailMobileNumberAuth
  )
  .post("/viewProfile", controller.viewProfile) 
  .get("/transactionHistory", controller.transactionHistory)
  .put("/notificationPermission", controller.notificationPermission) 
  //*****************cash collection */ 
  //*********transaction */
  .get("/getTransactions", controller.getTransactions)  
  .get("/transactionList", controller.transactionList) 
  .get("/faqList", controller.faqList) 
  .put("/editProfile", controller.editProfile)
  .post("/addAuthentication", controller.addAuthentication)
  .post("/addAmountInAccount", controller.addAmountInSavingAccount) 
  .post("/addAmountInCurrentAccount", controller.addAmountInCurrentAccount) 
  .get("/getTransactionNotification", controller.getTransactionNotification)
  .post("/addAmountByStripeInCurrent", controller.addAmountByStripeInCurrent)
  .post("/addAmountByStripeInConfirm", controller.addAmountByStripeInConfirm) 
  .post("/sendWhatsAppOTP", controller.sendWhatsAppOTP) 
   .post('/connectWallet', controller.connectWallet)
