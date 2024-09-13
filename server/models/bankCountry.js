import mongoose from "mongoose";
const schema = mongoose.Schema;

const options = {
    collection: "bankCountry",
    timestamps: true,
};
const bankCountrySchema = new schema(
    {
        countryName: {
            type: String
        },
        countryShortName: {
            type: String
        },
        countryIcon: {
            type: String
        }
    },
    options
);
;
module.exports = mongoose.model("bankCountry", bankCountrySchema);
