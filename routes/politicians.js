const express = require('express');
const router = express.Router();
const { Politician , validate} = require('../models/politician');

router.get("/",async (req,res) => {
    const politicians = await Politician.find();
    res.send(politicians);
});

router.get("/:id",async (req,res)=> {
    const politician = await Politician.findById(req.params.id);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");
    res.send(politician);
});

router.post("/",async (req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let politician = new Politician(req.body);
    politician = await politician.save();
    res.send(politician);
});

router.put("/:id",async (req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);0

    const { Name,Email,Password } = req.body;
    
    const politician = await Politician.findByIdAndUpdate(req.params.id,{Name,Email,Password},{new : true});
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    res.send(politician);    
});

router.delete("/:id",async (req,res) => {
    const politician = await Politician.findByIdAndRemove(req.params.id);
    if(!politician) return res.status(404).send("There is no politician with the given ID.");

    res.send(politician);
})

module.exports = router;