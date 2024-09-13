import mongoose from "mongoose";
const schema = mongoose.Schema;
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import status from "../enums/status";
import transactionType from "../enums/transactionType";
import transStatusType from "../enums/transactionStatusType";
// import changelyTransactionStatus from "../enums/changelyTransactionStatus";

const options = {
  collection: "transaction",
  timestamps: true,
};

const schemaDefination = new schema(
  {
    title: { type: String },
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
    walletId: { type: mongoose.Types.ObjectId, ref: "wallet" },
    exchangeId: { type: mongoose.Types.ObjectId, ref: "exchange" },
    stakeId: { type: mongoose.Types.ObjectId, ref: "stake" },
    withdrawId: { type: mongoose.Types.ObjectId, ref: "withdraw" },
    userTransferId: { type: mongoose.Types.ObjectId, ref: "userTransfer" },
    depositId: { type: mongoose.Types.ObjectId, ref: "paymentConfirmation" },
    coinName: { type: String },
    coinImage: { type: String },
    fromAddress: { type: String },
    toAddress: { type: String },
    quantity: { type: Number },
    amount: { type: String },
    tokenAmount: { type: String },
    isAdminTransaction: { type: Boolean },
    interest: { type: String },
    paymentType: { type: String },
    transactionHash: { type: String },
    transactionFee: { type: String },
    type: {
      type: String,
      enum: [
        transactionType.DEPOSIT,
        transactionType.EXCHANGE,
        transactionType.WITHDRAW,
        transactionType.TRANSFER,
        transactionType.STAKE,
        transactionType.UN_STAKE,
        transactionType.BANKTTRANSFER,
        transactionType.SUBSCRIPTION,
      ],
    },
    transactionType: { type: String },
    transStatusType: {
      type: String,
      // enum: [
      //   transStatusType.PENDING,
      //   transStatusType.COMPLETE
      // ],
      default: transStatusType.PENDING,
    },
    status: { type: String, default: status.ACTIVE },
  },
  options
);

schemaDefination.plugin(mongoosePaginate);
schemaDefination.plugin(mongooseAggregatePaginate);
module.exports = mongoose.model("transaction", schemaDefination);
