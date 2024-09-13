import Mongoose, { Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import status from '../enums/status';
import { type } from "joi/lib/types/object";
var transactionNotifiactionModel = new Schema(
  {
    userId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    senderEmail: {
      type: String
    },
    recieverEmail: {
      type: String
    },
    message: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    type: {
      type: String
    },
    status: { type: String, default: status.ACTIVE },
  },
  { timestamps: true }
);

transactionNotifiactionModel.plugin(mongoosePaginate);
module.exports = Mongoose.model("transactionNotification", transactionNotifiactionModel);