const express = require('express');
const router = express.Router();
const { Rating , validate} = require('../models/rating');
const { Politician } = require('../models/politician');

router.get("/:id",async (req,res)=> {
    const politician = await Politician.findById(req.params.id);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    const ratings = politician.Ratings;
    res.send(ratings);
});

router.post("/:id",async (req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const rating = new Rating(req.body);
    let politician = await Politician.findById(req.params.id);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    politician.Ratings.push(rating);
    politician = await politician.save();

    res.send(politician);
});

router.put("/:politicianId/:userId",async (req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const { Value } = req.body;

    let politician = await Politician.findById(req.params.politicianId);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    for(let rating of politician.Ratings){
        if(rating.UserId.toString() === req.params.userId){
            rating.Value = Value;
            break;
        }
    }
    politician.markModified("Ratings");
    politician = await politician.save();

    res.send(politician);    
});

module.exports = router;