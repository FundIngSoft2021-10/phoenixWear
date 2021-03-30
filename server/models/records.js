const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
    },
});

const Record = mongoose.model("Record", recordSchema);
module.exports = Record;

/* EXAMPLE POST SKELETON

    {
        "description": ""
    }

*/