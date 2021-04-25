const Joi = require('joi');
const mongoose = require('mongoose');
const passwordComplexity = require("joi-password-complexity");

const User = mongoose.model('User', new mongoose.Schema({
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
  Politicians:{
      type: [String],
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

function validateUser(user){
    const schema = Joi.object({
        Name: Joi.string().min(3).max(255).label("Name").required(),
        Email:Joi.string().email().label("E-Mail").required(),
        Password:passwordComplexity(complexityOptions),
        Politicians:Joi.array()
    });
    return schema.validate(user);
};

exports.User = User; 
exports.validate = validateUser;