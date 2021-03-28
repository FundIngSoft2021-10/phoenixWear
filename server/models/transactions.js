const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrsSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        required: false,
    },
    ID_buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ID_seller: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ID_product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    sellers_part: {
        type: Number,
        required: true,
    },
    revenue: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Transaction", TrsSchema);

/*  EXAMPLE POST SKELETON

    {
        "ID_buyer" : "",
        "ID_seller" : "",
        "ID_product" : "",
        "sellers_part" : "",
        "revenue" : ""
    }

*/