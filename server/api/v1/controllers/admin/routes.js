import Express from "express";
import controller from "./controller";
import auth from "../../../../helper/auth";
import upload from "../../../../helper/uploadHandler";

export default Express.Router()
  .use(upload.uploadFile)
  .post("/login", controller.login) 
  .post("/forgotPassword", controller.forgotPassword)
  .post("/verifyOTP", controller.verifyOTP)
  .put("/resendOTP", controller.resendOTP) 
  // **********************ADMIN************************/
  .get("/dashboard", controller.dashboard) 
  .patch("/changePassword", controller.changePassword)
  .get("/adminProfile", controller.adminProfile) 
  .post("/resetPassword", controller.resetPassword) 

  .put("/updateAdminProfile", controller.updateAdminProfile) 
  .get("/viewUser", controller.viewUser)
  .delete("/deleteUser", controller.deleteUser)
  .put("/blockUnblockUser", controller.blockUnblockUser) 
  .get("/listUser", controller.listUser)
  .get("/userList", controller.userList)       
  //******************Support & Ticket************ */
  .put("/replySupportTicket", controller.replySupportTicket)
  .get("/listSupportTicket", controller.listSupportTicket)
  .get("/viewSupportTicket", controller.viewSupportTicket)  
  ///**************************Coin Management*************** */
  .get("/listCoin", controller.listCoin)
  .put("/updateCoinPermission", controller.updateCoinPermission)  
  .put("/updateAdminProfile", controller.updateAdminProfile)  
  .put("/sendAllUserNotification", controller.sendAllUserNotification)

  // .put("/pushNotificationOne", controller.pushNotificationOne); 





