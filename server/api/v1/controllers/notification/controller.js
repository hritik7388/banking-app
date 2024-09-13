import Joi from "joi";
import _ from "lodash";
import apiError from '../../../../helper/apiError';
import auth from '../../../../helper/auth';
import response from '../../../../../assets/response';
import responseMessage from '../../../../../assets/responseMessage';
import userType from "../../../../enums/userType";
import status from '../../../../enums/status';
import { notificationServices } from '../../services/notification';
import { userServices } from '../../services/user'; 
const { notificationCreate, notificationList, notificationData, notificationUpdate, multiUpdateNotification } = notificationServices;
const { findUser, userFindList, updateUser, } = userServices; 

export class notificationController {
    

    /**
    * @swagger
    * /notification/addAnnouncement:
    *   post:
    *     tags:
    *       - ADMIN_ANNOUNCEMENT_MANAGEMET
    *     description: addAnnouncement
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: token
    *         description: token
    *         in: header
    *         required: true
    *       - name: title
    *         description: title
    *         in: formData
    *         required: true
    *       - name: message
    *         description: message
    *         in: formData
    *         required: false
    *       - name: startDate
    *         description: startDate
    *         in: formData
    *         required: false
    *       - name: endDate
    *         description: endDate
    *         in: formData
    *         required: false
    *     responses:
    *       200:
    *         description: Returns success message
    */
    async addAnnouncement(req, res, next) {
        try {
            let validatedBody = req.body;
            let userResult = await findUser({_id: req.userId,userType: { $in: "ADMIN" }, status: { $ne: status.DELETE }});
            if (!userResult) {
                throw apiError.notFound(responseMessage.USER_NOT_FOUND);
            }
            let obj = {
                userId: userResult._id,
                title: validatedBody.title,
                message: validatedBody.message,
                startDate: validatedBody.startDate,
                endDate: validatedBody.endDate,
                type: "ANNOUNCEMENT"
              }
            let notificationRes = await announcementCreate(obj)
            return res.json(new response(notificationRes, responseMessage.DATA_SAVED));
        }
        catch (error) {
            return next(error);
        }
    }

    /**
    * @swagger
    * /notification/sendAnnouncement:
    *   get:
    *     tags:
    *       - ADMIN_ANNOUNCEMENT_MANAGEMET
    *     description: sendAnnouncement
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: token
    *         description: token
    *         in: header
    *         required: true
    *       - name: annouId
    *         description: annouId
    *         in: query
    *         required: true
    *     responses:
    *       200:
    *         description: Returns success message
    */
    async sendAnnouncement(req, res, next) {
        try {
            let validatedBody = req.query;
            let adminRes = await findUser({_id: req.userId,userType: { $in: "ADMIN" }, status: { $ne: status.DELETE }});
            if (!adminRes) {
                throw apiError.notFound(responseMessage.USER_NOT_FOUND);
            }
            let sendData = await announcementData({status: status.ACTIVE, userId: adminRes._id, _id: validatedBody.annouId})
            let userData = await userFindList({status: { $ne: status.DELETE }, userType: userType.USER});
            for (const element of userData) {
                let addData = {
                    userId: element._id,
                    title: sendData.title,
                    message: sendData.message,
                    type: "ANNOUNCEMENT"
                }; 
                console.log("data ===========>>", addData)    
                await notificationCreate(addData);
            }
            return res.json(new response(userData, responseMessage.DATA_SAVED));
        }
        catch (error) {
            return next(error);
        }
    }

    /**
     * @swagger
     * /notification/listAnnouncement:
     *   get:
     *     tags:
     *       - ADMIN_ANNOUNCEMENT_MANAGEMET
     *     description: list notifications
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: token
     *         description: admin token
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
    async listAnnouncement(req, res, next) {
        try {
            let adminRes = await findUser({_id: req.userId,userType: { $in: "ADMIN" }, status: { $ne: status.DELETE }});
            if (!adminRes) {
                throw apiError.notFound(responseMessage.USER_NOT_FOUND);
            }
            else {
                const data = await announcementList({ status: status.ACTIVE, userId: adminRes._id, type : "ANNOUNCEMENT" });
                console.log("data=====>>>",data)
                if (!data) {
                    throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
                } else {
                    return res.json(new response(data, responseMessage.DATA_FOUND));
                }
            }
        } catch (error) {
            return next(error);
        }
    }

    /**
     * @swagger
     * /notification/viewAnnouncement:
     *   get:
     *     tags:
     *       - ADMIN_ANNOUNCEMENT_MANAGEMET
     *     description: viewAnnouncement
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: token
     *         description: token
     *         in: header
     *         required: true
     *       - name: annouId
     *         description: annouId
     *         in: query
     *         required: true
     *     responses:
     *       200:
     *         description: Data found successfully.
     *       404:
     *         description: User not found || Data not found.
     *       501:
     *         description: Something went wrong!
     */
    async viewAnnouncement(req, res, next) {
        try {
            let validatedBody = req.query;
            let adminRes = await findUser({_id: req.userId,userType: { $in: "ADMIN" }, status: { $ne: status.DELETE }});
            if (!adminRes) {
                throw apiError.notFound(responseMessage.USER_NOT_FOUND);
            }
            else {
                let sendData = await announcementData({status: status.ACTIVE, userId: adminRes._id, _id: validatedBody.annouId})
                if (!sendData) {
                    throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
                } else {
                    return res.json(new response(sendData, responseMessage.DATA_FOUND));
                }
            }
        } catch (error) {
            return next(error);
        }
    }

    /**
     * @swagger
     * /notification/deleteAnnouncement:
     *   delete:
     *     tags:
     *       - ADMIN_ANNOUNCEMENT_MANAGEMET
     *     description: deleteAnnouncement
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: token
     *         description: token
     *         in: header
     *         required: true
     *       - name: annouId
     *         description: annouId
     *         in: formData
     *         required: true
     *     responses:
     *       200:
     *         description: Data found successfully.
     *       404:
     *         description: User not found || Data not found.
     *       501:
     *         description: Something went wrong!
     */
    async deleteAnnouncement(req, res, next) {
        try {
            let validatedBody = req.body;
            let adminRes = await findUser({_id: req.userId,userType: { $in: "ADMIN" }, status: { $ne: status.DELETE }});
            if (!adminRes) {
                throw apiError.notFound(responseMessage.USER_NOT_FOUND);
            }
            else {
                let sendData = await announcementData({status: status.ACTIVE, userId: adminRes._id, _id: validatedBody.annouId})
                if (!sendData) {
                    throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
                } else {
                    let result = await announcementUpdate({_id: sendData._id},{ status: status.DELETE });
                    return res.json(new response(result, responseMessage.DELETE_SUCCESS));
                }
            }
        } catch (error) {
            return next(error);
        }
    }

    /**
     * @swagger
     * /notification/updateAnnouncement:
     *   put:
     *     tags:
     *       - ADMIN_ANNOUNCEMENT_MANAGEMET
     *     description: updateAnnouncement
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: token
     *         description: token
     *         in: header
     *         required: true
     *       - name: annouId
     *         description: annouId
     *         in: formData
     *         required: true
     *       - name: title
     *         description: title
     *         in: formData
     *         required: true
     *       - name: message
     *         description: message
     *         in: formData
     *         required: false
     *       - name: startDate
     *         description: startDate
     *         in: formData
     *         required: false
     *       - name: endDate
     *         description: endDate
     *         in: formData
     *         required: false
     *     responses:
     *       200:
     *         description: Data found successfully.
     *       404:
     *         description: User not found || Data not found.
     *       501:
     *         description: Something went wrong!
     */
    async updateAnnouncement(req, res, next) {
        try {
            let validatedBody = req.body;
            let adminRes = await findUser({_id: req.userId,userType: { $in: "ADMIN" }, status: { $ne: status.DELETE }});
            if (!adminRes) {
                throw apiError.notFound(responseMessage.USER_NOT_FOUND);
            }
            else {
                let sendData = await announcementData({status: status.ACTIVE, userId: adminRes._id, _id: validatedBody.annouId})
                if (!sendData) {
                    throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
                } else {
                    let obj = {
                        title: validatedBody.title,
                        message: validatedBody.message,
                        startDate: validatedBody.startDate,
                        endDate: validatedBody.endDate,
                        type: "ANNOUNCEMENT"
                      }
                    let result = await announcementUpdate({_id: sendData._id}, obj);
                    return res.json(new response(result, responseMessage.UPDATE_SUCCESS));
                }
            }
        } catch (error) {
            return next(error);
        }
    }


    /**
  * @swagger
  * /notification/notificationEnableDisable:
  *   put:
  *     tags:
  *       - NOTIFICATION MANAGEMENT
  *     description: notificationEnableDisable
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

    async notificationEnableDisable(req, res, next) {
        try {
            let userResult = await findUser({ _id: req.userId, status: { $ne: status.DELETE } });
            if (!userResult) {
                throw apiError.notFound(responseMessage.USER_NOT_FOUND);
            }
            if (userResult.notificationEnable == false) {
                let notificationUpdate = await updateUser(userResult._id, { $set: { notificationEnable: true } })
                return res.json(new response(notificationUpdate, responseMessage.NOTIFICATION_ENABLE));

            } else {
                let notificationUpdate = await updateUser(userResult._id, { $set: { notificationEnable: false } })
                return res.json(new response(notificationUpdate, responseMessage.NOTIFICATION_DISABLE));
            }
        }
        catch (error) { 
            return next(error);
        }
    }


    /**
     * @swagger
     * /notification/listNotification:
     *   get:
     *     tags:
     *       - NOTIFICATION MANAGEMENT
     *     description: list notifications
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
    async listNotification(req, res, next) {
        try {
            let userResult = await findUser({ _id: req.userId,status: { $ne: status.DELETE } });
            if (!userResult) {
                throw apiError.notFound(responseMessage.USER_NOT_FOUND);
            }
            else {
                const data = await notificationList({ status: status.ACTIVE, userId: userResult._id , type: "NOTIFICATION"});
                console.log("data=====>>>",data)
                if (!data) {
                    throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
                } else {
                    return res.json(new response(data, responseMessage.DATA_FOUND));
                }
            }
        } catch (error) {
            return next(error);
        }
    }


    /**
     * @swagger
     * /notification/viewNotification/{_id}:
     *   get:
     *     tags:
     *       - NOTIFICATION MANAGEMENT
     *     description: viewStaticContent
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: token
     *         description: User token
     *         in: header
     *         required: true
     *       - name: _id
     *         description: _id of notification
     *         in: path
     *         required: true
     *     responses:
     *       200:
     *         description: Data found successfully.
     *       404:
     *         description: User not found || Data not found.
     *       501:
     *         description: Something went wrong!
     */
    async viewNotification(req, res, next) {
        try {
            let userResult = await findUser({ _id: req.userId, status: { $ne: status.DELETE } });
            if (!userResult) {
                throw apiError.notFound(responseMessage.USER_NOT_FOUND);
            }
            else {
                const data = await notificationData({ _id: req.params._id, status: status.ACTIVE });
                if (!data) {
                    throw apiError.notFound(responseMessage.DATA_NOT_FOUND);
                } else {
                    await notificationUpdate({ _id: data._id },  { read: true } );
                    return res.json(new response(data, responseMessage.DATA_FOUND));
                }
            }
        } catch (error) {
            return next(error);
        }
    }

    /**
      * @swagger
      * /notification/readNotification:
      *   get:
      *     tags:
      *       - NOTIFICATION MANAGEMENT
      *     description: readNotification
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
    async readNotification(req, res, next) {
        try {
            let userResult = await findUser({ _id: req.userId, status: { $ne: status.DELETE } });
            if (!userResult) {
                throw apiError.notFound(responseMessage.USER_NOT_FOUND);
            }
            else {
                let result = await multiUpdateNotification({ userId: userResult._id }, { read: true });
                return res.json(new response(result, responseMessage.DETAILS_FETCHED));
            }
        }
        catch (error) {
            return next(error);
        }
    }

    async getNotificationList(token) {
        let responses;
        try {
            var unReadCount = 0;
            return new Promise(async (resolve, reject) => {
                let userId = await auth.verifyTokenBySocket(token);
                const responseData = await notificationList({ userId: userId, status: { $ne: status.DELETE } })
                if (responseData.docs.length == 0) {
                    responses = ({ responseCode: 404, responseMessage: "Data not found!", responseResult: [] });;
                    resolve(responses)
                } else {
                    for (let i = 0; i < responseData.docs.length; i++) {
                        if (responseData.docs[i].isRead === false) {
                            unReadCount += 1;
                        }
                    }
                    let obj = {
                        data: responseData.docs,
                        unReadCount: unReadCount
                    }
                    responses = ({ responseCode: 200, responseMessage: "Data fetched successfully!", responseResult: obj });
                    resolve(responses)
                }
            })
        } catch (error) {
            responses = (error);
            reject(responses)
        }
    }

    /**
    * @swagger
    * /notification/clearNotification:
    *   delete:
    *     tags:
    *       - NOTIFICATION MANAGEMENT
    *     description: clearNotification
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
    async clearNotification(req, res, next) {
        try {
            let userResult = await findUser({ _id: req.userId, userType: { $in: [userType.USER, userType.ADMIN] }});
            if (!userResult) {
                throw apiError.notFound(responseMessage.USER_NOT_FOUND);
            }
            else {
                let result = await multiUpdateNotification({ userId: userResult._id }, { status: status.DELETE });
                return res.json(new response(result, responseMessage.NOTIFICATION_CLEAR));
            }
        }
        catch (error) {
            return next(error);
        }
    }


}


export default new notificationController()
