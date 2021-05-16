const Product = require("../models/products");
const Record = require("../models/records");

exports.postProduct = async(req, res) => {
    try {
        const product = await new Product(req.body).save();
        const record = await new Record({
            description: "Se crea el producto: " +
                product.information.name +
                "\nDe ID: " +
                product.id,
        }).save();
        res.status(201).send([product, record]);
    } catch (error) {
        res.status(500).send(error);
    }
};