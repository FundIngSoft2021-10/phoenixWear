const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    date: {
        type: Date,
    },
    description: {
        type: String,
    },
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;