const express = require('express');
const router = express.Router();
const { Rating , validate} = require('../models/rating');
const { Politician } = require('../models/politician');

router.get("/:id",async (req,res)=> {
    const politician = await Politician.findById(req.params.id);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    const ratings = [];
    for(let work of politician.Works){
        for(let rating of work.Ratings){
            ratings.push(rating);
        }
    }

    res.send(ratings);
});

router.post("/:politicianId/:workId",async (req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const rating = new Rating(req.body);
    let politician = await Politician.findById(req.params.politicianId);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    for(let work of politician.Works){
        if(work._id.toString() === req.params.workId){
            work.Ratings.push(rating);
        }
    }
    politician = await politician.save();

    res.send(politician);
});

router.put("/:politicianId/:workId/:userId",async (req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const { Value } = req.body;

    let politician = await Politician.findById(req.params.politicianId);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    for(let work of politician.Works){
        if(work._id.toString() === req.params.workId){
            for(let rating of work.Ratings){
                if(rating.UserId.toString() === req.params.userId){
                    rating.Value = Value;
                    break;
                }
            }
        }
    }
    politician.markModified("Works");
    politician = await politician.save();

    res.send(politician);    
});

module.exports = router;