const express = require("express");
const router = new express.Router();

const Trs = require("../models/transactions");

router.get("/", async(req, res) =>{
    try {
        const trs = await Trs.find();
        if (!trs) {
            return res.status(400).send();
        }
        res.send({
            trs,
        });
    } catch (error){
        res.status(500).send();
    }
});

router.post("/", async(req, res) =>{
    try {
        const trs = await new Trs(req.body).save();
        res.status(201).send(trs);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;