const Trs = require("../models/transactions");
const Record = require("../models/records");

exports.postTransaction = async (req, res) => {
    try {
        const trs = await new Trs(req.body).save();
        const record = await new Record({
            "description": "Se crea la transacción de ID: " + trs.id
        }).save();
        res.status(201).send([trs,record]);
    } catch (error) {
        res.status(500).send(error);
    }
};