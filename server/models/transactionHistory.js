import mongoose from "mongoose";
const schema = mongoose.Schema;
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import status from "../enums/status";
import transactionType from "../enums/transactionType"; 
// import changelyTransactionStatus from "../enums/changelyTransactionStatus";

const options = {
  collection: "transactionHistory",
  timestamps: true,
};

const schemaDefination = new schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
    sentTo: { type: mongoose.Types.ObjectId, ref: "user" },
    accountType: { type: mongoose.Types.ObjectId, ref: "account" },
    subscriptionId: {
      type: schema.Types.ObjectId,
      ref: "subscriptionSchema",
    },
    purpose: { type: String },
    coinName: { type: String },
    endDate: { type: String },
    fromAddress: { type: String },
    accountType: { type: String },
    noOfDays: { type: String },
    interestRate: { type: String },
    amount: { type: Number },
    penaltyAmount: { type: Number },
    currency: { type: String },
    transferType: { type: String },
    lockBalaneId:{type: mongoose.Types.ObjectId},
    toAddress: { type: Array },
    toamount: { type: String },
    fromAmount: { type: String },
    cardDetail: { type: Array },
    bankDetail: { type: Array },
    transactionType: { type: String },
    requestType: { type: String },
    referredUserId: { type: String },
    referralAmount: { type: String },
    moneyTransferType: { type: String },
    status: { type: String, default: status.ACTIVE },
    subscriptionType:{type:String}
  },
  options
);

schemaDefination.plugin(mongoosePaginate);
schemaDefination.plugin(mongooseAggregatePaginate);
module.exports = mongoose.model("transactionHistory", schemaDefination);
