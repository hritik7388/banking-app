import mongoose from "mongoose";
const schema = mongoose.Schema;
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import status from "../enums/status";
import bankType from "../enums/bankType";
import bankCode from "../enums/bankCode";
const options = {
  collection: "bank",
  timestamps: true,
};
const bankSchema = new schema(
  {
    holderName: {
      type: String,
    },
    accountNumber: {
      type: String,
    },
    bankName: {
      type: String,
    },
    swiftCode: {
      type: String,
    },
    shortCode: {
      type: String,
    },
    ifscCode: {
      type: String,
    },
    bankAddress: { type: String },
    userId: {
      type: schema.Types.ObjectId,
      ref: "user",
    },
    bankType: {
      type: String,
      enum: [bankType.LOCAL, bankType.SWIFT],
    },
    bankCode: {
      type: String,
      enum: [bankCode.SWIFTCODE, bankCode.SHORTCODE],
    },
    bankBalanace: { type: Number },
    status: {
      type: String,
      enum: [status.ACTIVE, status.BLOCK, status.DELETE],
      default: status.ACTIVE,
    },
    country:{
      type :String
    }
  },
  options
);

bankSchema.plugin(mongoosePaginate);
bankSchema.plugin(mongooseAggregatePaginate);
module.exports = mongoose.model("bank", bankSchema);

// (async () => {
//     let result = await mongoose.model("bank", bankSchema).find({});
//     if (result.length != 0) {
//       console.log("Default bank  already created.");
//     } else {
//       var object1 = {
//         holderName: "ADMIN Swift Bank",
//         accountNumber: "1000123131312554",
//         bankName: "PUNJAB NATIONAL",
//         swiftCode: "PUNB0100010",
//         shortCode: "024587",
//         bankCode: bankCode.SWIFTCODE,
//         bankAddress:"Okhala D Block",
//         bankType: bankType.SWIFT
//       };

//       var object2 = {
//         holderName: "ADMIN Local Bank",
//         accountNumber: "155774787878",
//         bankName: "PUNJAB NATIONAL",
//         ifscCode: "024587",
//         bankCode: bankCode.SHORTCODE,
//         bankAddress:"Okhala D Block",
//         bankType: bankType.LOCAL
//       };
//       let bankResult = await mongoose.model("bank", bankSchema).create(
//         object1,
//         object2
//       );
//       if (bankResult) {
//         console.log("Default Bank created.", bankResult);
//       }
//     }
//   }).call();
