 
const mongoose = require('mongoose');
import Mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";

const stateModel = new mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  state:[
    {
        stateName: {
            type: String,
            required: true
            },
            state_shortName:{
                type :String
            },
             
            }
  ]
   
   
}, {
    timestamps: true,
  });

  stateModel.plugin(mongoosePaginate);
  stateModel.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('State', stateModel);
