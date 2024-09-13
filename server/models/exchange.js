import mongoose from "mongoose";
const schema = mongoose.Schema;
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import status from "../enums/status";
import exchangeStatus from "../enums/exchangeStatus";
import transactionType from "../enums/transactionType";

const options = {
  collection: "exchange",
  timestamps: true,
};

const exchangeSchema = new schema(
  {
    userId: { type: schema.Types.ObjectId, ref: "user" },
    fromCoinId: { type: schema.Types.ObjectId, ref: "wallet" },
    toCoinId: { type: schema.Types.ObjectId, ref: "wallet" },
    fromCoinType: { type: String },
    fromCoinAmount: { type: Number },
    fromCoinImage: { type: String },
    toCoinType: { type: String },
    trxAmount: { type: String},
    trxFee: { type: String},
    toCoinAmount: { type: Number },
    toCoinImage: { type: String },
    exchangeFee: { type: Number, default: 0 },
    reason: { type: String },
    status: { type: String, default: status.ACTIVE },
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
      ],
      default: transactionType.EXCHANGE,
    },
    exchangeStatus: {
      type: String,
      default: exchangeStatus.PENDING,
      enum: [
        exchangeStatus.APPROVE,
        exchangeStatus.PENDING,
        exchangeStatus.REJECT,
      ],
    },
  },
  options
);

exchangeSchema.plugin(mongoosePaginate);
exchangeSchema.plugin(mongooseAggregatePaginate);
module.exports = mongoose.model("exchange", exchangeSchema);
