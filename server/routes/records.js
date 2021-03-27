const express = require("express");
const Record = require("../models/records");

const router = new express.Router();

router.get("/", async(req, res) => {
    try {
        const record = await Record.find();
        if (!record) {
            return res.status(400).send();
        }
        res.send({
            record,
        });
    } catch (error) {
        res.status(500).send();
    }
});

router.post("/", async(req, res) => {
    try {
        const record = await new Record(req.body).save();
        res.status(201).send(record);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;