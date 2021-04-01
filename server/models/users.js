const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfoUser = require("./info_users");
const Cart = require("./cart_user");

const userSchema = new Schema({
    personal_information: {
        type: InfoUser.schema,
        required: true,
    },
    phoenix_credits: {
        type: Number,
        default: 0,
    },
    score: {
        type: Number,
        required: false,
        min: 0,
        max: 5,
        default: 5
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: false,
    }],
    own_products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: false,
    }],
    purchased_products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: false,
    }],
    cart: {
        type: Cart.schema,
        ref: 'Cart',
        required: false,
    },
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }],
});

module.exports = mongoose.model("User", userSchema);

/* EXAMPLE POST SKELETON

    {
        "mail" : "",
        "pass" : "",
        "personal_information" : {
            "username" : "",
            "phone" : "",
            "address" : "",
            "departament" : "",
            "city" : ""
        },
        "photo" : "",
        "phoenix_credits" : "",
        "score" : "",
        "favorites" : [],
        "own_products" : [],
        "purchased_products" : [],
        "cart" : {
            "products" : [],
            "total" : ""
        }
    }

*/