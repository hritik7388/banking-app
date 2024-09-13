import Mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import status from "../enums/status";
import stake from "../enums/stake";
import transactionType from "../enums/transactionType";
const options = {
  collection: "userTransfer",
  timestamps: true,
};
const schema = Mongoose.Schema;
var userPushNotificationSchema = new schema(
  {
    userId: {
      type: schema.Types.ObjectId,
      ref: "user",
    }, 
    message:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
  },
  options
);

userPushNotificationSchema.plugin(mongoosePaginate);
userPushNotificationSchema.plugin(mongooseAggregatePaginate);
module.exports = Mongoose.model("userTransfer", userPushNotificationSchema);
