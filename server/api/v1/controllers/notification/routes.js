import Express from "express";
import controller from "./controller";
import auth from '../../../../helper/auth'
import upload from '../../../../helper/uploadHandler';


export default Express.Router()
    .use(auth.verifyToken)
    .post('/addAnnouncement', controller.addAnnouncement)
    .get('/sendAnnouncement', controller.sendAnnouncement)
    .get('/viewAnnouncement', controller.viewAnnouncement)
    .delete('/deleteAnnouncement', controller.deleteAnnouncement)
    .put('/updateAnnouncement', controller.updateAnnouncement)
    .get('/listAnnouncement', controller.listAnnouncement)
    .put('/notificationEnableDisable', controller.notificationEnableDisable)
    .get('/listNotification', controller.listNotification)
    .get('/viewNotification/:_id', controller.viewNotification)
    .get('/readNotification', controller.readNotification)
    .delete('/clearNotification', controller.clearNotification)
    // .put('/editNotification', controller.editNotification)

