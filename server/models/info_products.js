const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const info_ProductSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["Disponible", "Enviado", "Entregado", "Finalizado"],
        default: "Disponible",
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
    },
    short_description: {
        type: String,
        required: false,
    },
    premium: {
        type: Boolean,
        default: false,
    },
    photo: [{
        type: Buffer,
        required: true,
    }]
});

module.exports = mongoose.model('InfoProduct', info_ProductSchema);