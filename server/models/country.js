 
const mongoose = require('mongoose');
import Mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";

const countryModel = new mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  shortName:{
    type :String
  }
   
   
}, {
    timestamps: true,
  });

countryModel.plugin(mongoosePaginate);
countryModel.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('Country', countryModel);
