import mongoose from "mongoose";
const schema = mongoose.Schema;
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import status from "../enums/status";
import axios from "axios";

const options = {
  collection: "useraccount",
  timestamps: true,
};

const schemaDefination = new schema(
  {
    type: { type: String },
    amount: {
      type: Number,
      default: 0
    },
    totalAmount: {
      type: Number,
      default: 0
    },  
 

  
  
 
    deposit:
      [{
        deposit: { type: String },
        depositMethod: { type: String },
        createdAt: { type: Date, default: Date.now() },
        status: { type: Boolean }
      }],
    account: {
      type: [{
        accountID: { type: schema.Types.ObjectId, ref: "account" },
        createdAt: { type: Date, default: Date.now() }
      }],
      require: false
    },
    userId: { type: schema.Types.ObjectId, ref: "user" },
    status: { type: String, status: status.ACTIVE },
    accountNumber: {
      type: String
    },
    cardNumber: {
      type: String
    },
    cardType: {
      type: String
    },
    subscriptionId: {
      type: schema.Types.ObjectId,
      ref: "subscriptionSchema"
    }
  },
  options
);

schemaDefination.plugin(mongoosePaginate);
schemaDefination.plugin(mongooseAggregatePaginate);
module.exports = mongoose.model("useraccount", schemaDefination);




