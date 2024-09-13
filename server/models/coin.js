
import Mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import status from '../enums/status';
import coinType from '../enums/coinType';
import coinImage from "../enums/coinImage";

const options = {
    collection: "coin",
    timestamps: true,
};

const coinSchema = new Schema(
    {
        coinName: {
            type: String
        },
        coinImage: {
            type: String
        },
        status: { type: String, default: status.ACTIVE },
        permission:  { type: Boolean, default: true },
    },
    options
);
coinSchema.plugin(mongoosePaginate);
coinSchema.plugin(mongooseAggregatePaginate);
module.exports = Mongoose.model("coin", coinSchema);


(async () => {
    let result = await Mongoose.model("coin", coinSchema).find({});
    if (result.length != 0) {
        console.log("Default coin content already created.");
    }
    else {
        const object1 = {
            coinName: coinType.BTC,
            coinImage: coinImage.BTC
        };
        const object2 = {
            coinName: coinType.ETH,
            coinImage: coinImage.ETH
        };
        const object3 = {
            coinName: coinType.USDT,
            coinImage: coinImage.USDT
        };
        const object4 = {
            coinName: coinType.USD,
            coinImage: coinImage.USD
        };
        let coinResult = await Mongoose.model("coin", coinSchema).create(object1, object2, object3, object4);
        if (coinResult) {
            console.log("DEFAULT coin created.", coinResult)
        }
    }
}).call();