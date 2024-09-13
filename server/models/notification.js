import Mongoose, { Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import status from '../enums/status';
var notificationModel = new Schema(

  {
    userId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    type: {
      type: String
    },
    title: {
      type: String
    },
    message: {
      type: String
    },
    description:{
      type:String
    },
    read:{
      type:Boolean,
      default:false
    },
    subscriptionExpiry:{
      type:Boolean,
    },
    subscriptionExpired:{
      type:Boolean,
    },
    subscriptionId:{
      type: Mongoose.Schema.Types.ObjectId,
      ref:'buySubscriptionSchema'
    },
    notified:{
      type: Boolean,
      default:false
    },
    status: { type: String, default: status.ACTIVE },
  },
  { timestamps: true }
);

notificationModel.plugin(mongoosePaginate);
module.exports = Mongoose.model("notification", notificationModel);