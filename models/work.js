const Joi = require('joi');
const mongoose = require('mongoose');
const { ratingSchema } = require("./rating");

const workSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 500,
      },
      Ratings: {
          type: [ratingSchema],
          default: []
      }
});

const Work = mongoose.model('Work', workSchema);

function validateWork(politicalParty){
    const schema = Joi.object({
        Description: Joi.string().min(3).max(500).label("Name").required(),
        Ratings:Joi.array(),
        _id:Joi.string()
    });
    return schema.validate(politicalParty);
};

exports.Work = Work; 
exports.workSchema = workSchema;
exports.validate = validateWork;