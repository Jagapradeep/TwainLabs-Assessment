const Joi = require('joi');
const mongoose = require('mongoose');

const politicalPartySchema = new mongoose.Schema({
    Name: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true,
      },
      Ratings: {
          type: Array,
          default: []
      }
});

const PoliticalParty = mongoose.model('PoliticalParty', politicalPartySchema);

function validatePoliticalParty(politicalParty){
    const schema = Joi.object({
        Name: Joi.string().min(3).max(50).label("Name").required(),
        Ratings: Joi.array(),
        _id: Joi.string()
    });
    return schema.validate(politicalParty);
};

exports.PoliticalParty = PoliticalParty; 
exports.politicalPartySchema = politicalPartySchema;
exports.validate = validatePoliticalParty;