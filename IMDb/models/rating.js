const Joi = require('joi');
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
      },
      Value: {
          type: Number,
          min: 1,
          max: 10,
          required: true
      }
});

const Rating = mongoose.model('Rating', ratingSchema);

function validateRating(rating){
    const schema = Joi.object({
        UserId: Joi.objectId(),
        Value:Joi.number().min(1).max(10).required(),
        _id:Joi.string()
    });
    return schema.validate(rating);
};

exports.Rating = Rating; 
exports.workSchema = ratingSchema;
exports.validate = validateRating;