import Mongoose, { Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import status from "../enums/status";
var announcementModel = new Schema(
  {
    userId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    type: {
      type: String,
    },
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    status: { type: String, default: status.ACTIVE },
  },
  { timestamps: true }
);

announcementModel.plugin(mongoosePaginate);
module.exports = Mongoose.model("announcement", announcementModel);
