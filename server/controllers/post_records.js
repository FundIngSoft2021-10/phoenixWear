const Record = require("../models/records");

exports.postRecord = async (req, res) => {
    try {
        const record = await new Record(req.body).save();
        res.status(201).send(record);
    } catch (error) {
        res.status(500).send(error);
    }
};