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
    },
    mail: {
        type: String, 
        require: true,
        lowercase: true,
    },
    pass: {
        type: String,
        required: true,
        minLength: [6, "La contraseña es muy corta"],
    },
    photo: {
        type: Buffer,
        require: true,
    }
});

module.exports = mongoose.model('InfoUser', infoUserSchema);