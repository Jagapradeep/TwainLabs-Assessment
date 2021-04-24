const Joi = require('joi');
const mongoose = require('mongoose');
const passwordComplexity = require("joi-password-complexity");
const { politicalPartySchema } = require("./politicalParty");
const { workSchema } = require("./work");
const { ratingSchema } = require("./rating");

const Politician = mongoose.model('Politician', new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15
  },
  Ratings: {
    type: [ratingSchema],
    default: []
  },
  PoliticalParty: {
    type: politicalPartySchema,
    default: null
  },
  Works: {
    type: [workSchema],
    default: []
  }
}));

const complexityOptions = {
    min: 5,
    max: 15,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
};

function validatePolitician(user){
    const schema = Joi.object({
        Name: Joi.string().min(3).max(50).label("Name").required(),
        Email:Joi.string().email().label("E-Mail").required(),
        Password:passwordComplexity(complexityOptions),
        Ratings:Joi.array(),
    });
    return schema.validate(user);
};

exports.Politician = Politician; 
exports.validate = validatePolitician;