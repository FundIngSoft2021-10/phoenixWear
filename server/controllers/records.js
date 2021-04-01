const Record = require("../models/records");

exports.getRecords = async (req, res) => {
    try {
        const record = await Record.find().sort({
            date: 0
        });
        if (!record) {
            return res.status(400).send();
        }
        res.send({
            record,
        });
    } catch (error) {
        res.status(500).send();
    }
};

exports.findById = async (req, res) => {
    try {
        const recordById = await Record.findById(req.params.id);
        if (!recordById) {
            return res.status(400).send();
        }
        res.send(recordById);
    } catch (error) {
        res.status(500).send();
    }
};

exports.post = async (req, res) => {
    try {
        const record = await new Record(req.body).save();
        res.status(201).send(record);
    } catch (error) {
        res.status(500).send(error);
    }
};