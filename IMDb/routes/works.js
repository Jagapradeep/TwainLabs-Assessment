const express = require('express');
const router = express.Router();
const { Work , validate} = require('../models/work');
const { Politician } = require('../models/politician');

router.get("/:id",async (req,res) => {
    const politician = await Politician.findById(req.params.id);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    const works = politician.Works;
    res.send(works);
});

router.post("/:id",async (req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const work = new Work(req.body);
    let politician = await Politician.findById(req.params.id);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    const works = politician.Works;
    works.push(work);
    politician.Works = works;

    politician = await politician.save();
    res.send(politician);
});

router.put("/:id",async (req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let politician = await Politician.findById(req.params.id);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    for(let work of politician.Works){
        if(work._id.toString() === req.body._id){
            work.Description = req.body.Description;
            work.Ratings = req.body.Ratings;
            break;
        }
    }

    politician = await politician.save();
    res.send(politician);    
});

router.delete("/:id/:workId",async (req,res) => {
    let politician = await Politician.findById(req.params.id);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    for(let i in politician.Works){
        if(politician.Works[i]._id.toString() === req.params.workId){
            politician.Works.splice(i,1);
            break;
        }
    }

    politician = await politician.save();
    res.send(politician);
})

module.exports = router;