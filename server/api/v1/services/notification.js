import notificationModel from "../../../models/notification";


const notificationServices = {
    notificationCreate:async(insertObj)=>{
        return await notificationModel(insertObj).save();
    },
    notificationData:async(query)=>{
        return await notificationModel.findOne(query);
    },
    notificationList:async(query)=>{
        return await notificationModel.find(query).sort({ createdAt: -1 });
    },
    notificationUpdate:async(query,updateObj)=>{
        return await notificationModel.findOneAndUpdate(query,updateObj,{new:true});
    },
    multiUpdateNotification: async (query, updateObj) => {
        return await notificationModel.updateMany(query, updateObj, { multi: true });
    },
}

module.exports = { notificationServices };