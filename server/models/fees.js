import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import status from "../enums/status";

const options = {
    collection: "fees",
    timestamps: true,
};

const feesSchema = new Schema(
    {
        fees: {
            type: Number,
            default: 0,
        },
        feesInPercentage: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            default: "ACTIVE",
        },
    },
    options
);

feesSchema.plugin(mongoosePaginate);
feesSchema.plugin(mongooseAggregatePaginate);

export default mongoose.model("fees", feesSchema);
