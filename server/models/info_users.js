const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoUserSchema = new Schema({
    username: {
        type: String,
        required : true,
    },
    phone: {
        type: Number,
        required : true,
    },
    address: {
        type: String,
        required : true,
    },
    departament: {
        type: String,
        required : true,
    },
    city: {
        type: String,
        required : true,
    }
});

module.exports = mongoose.model('InfoUser', infoUserSchema);