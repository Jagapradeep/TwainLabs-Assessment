const express = require('express');
const router = express.Router();
const { PoliticalParty , validate} = require('../models/politicalParty');
const { Politician } = require('../models/politician');

router.get("/",async (req,res) => {
    const politicians = await Politician.find();
    const politicalParties = [];
    for(let politician of politicians){
        if(politician.PoliticalParty)
            politicalParties.push(politician.PoliticalParty);
    }
    res.send(politicalParties);
});

router.get("/:id",async (req,res)=> {
    const politicians = await Politician.find();
    let politicalParty;
    for(let politician of politicians){
        if(politician.PoliticalParty._id.toString() === req.params.id){
            politicalParty = politician.PoliticalParty;
            break;
        }
    }
    if(!politicalParty) return res.status(404).send("There is no political party with the given ID.");
    res.send(politicalParty);
});

router.post("/:id",async (req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let politicalParty = new PoliticalParty(req.body);
    console.log(politicalParty);
    try {
        const politician = await Politician.findByIdAndUpdate(req.params.id,{PoliticalParty : politicalParty},{new : true});
        if(!politician) return res.status(404).send("There is no politician with the given ID.");
        res.send(politician);   
    } catch (error) {
        console.log(error);
        return res.send("Some error occurred...");
    }
});

router.put("/:id",async (req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const politicalParty = req.body;
    const politician = await Politician.findByIdAndUpdate(req.params.id,{PoliticalParty : politicalParty},{new : true});
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    res.send(politician);    
});

router.delete("/:id",async (req,res) => {
    const politician = await Politician.findByIdAndUpdate(req.params.id,{PoliticalParty : null},{new : true});
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    res.send(politician);
})

module.exports = router;