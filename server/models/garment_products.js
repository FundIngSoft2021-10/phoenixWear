const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garmentSchema = new Schema({
    type_garment: {
        type: String,
        enum: ["Vestidos", "Pantalones", "Chaquetas", "Zapatos", "Blusas", "Camisas", "Accesorios"],
        required: true,
    },
    size: {
        type: String,
        uppercase: true,
    },
    accessory: {
        type: String,
    },
});

module.exports = mongoose.model('Garment', garmentSchema);