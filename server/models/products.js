const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfoProduct = require("./info_products");
const Garment = require("./garment_products");

const productSchema = new Schema({
    information: {
        type: InfoProduct.schema,
        required: true,
    },
    tags: [{
        type: String,
        required: false,
    }],
    garment: {
        type: Garment.schema,
        required: true,
    },
    ID_seller: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    ID_buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    // link: {
    //     type: String,
    //     required: true,
    // }
});

module.exports = mongoose.model("Product", productSchema);

/* EXAMPLE POST SKELETON

    {
        "information" : {
            "status" : "",
            "name" : "",
            "price" : "",
            "color" : "",
            "description" : "",
            "short_description" : "",
            "premium" : ""
        },
        "photo" : "",
        "tags" : [],
        "garment" : {
            "type_garment" : "",
            "size" : ""
        },
        "ID_seller" : "", 
        "ID_buyer" : ""
    }

*/