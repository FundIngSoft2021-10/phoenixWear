const Product = require("../models/products");

exports.getProducts = async (req, res) => {
    try {
        const product = await Product.find().sort({
            "information.premium": -1
        });
        if (!product) {
            return res.status(400).send();
        }
        res.send({
            product,
        });
    } catch (error) {
        res.status(500).send();
    }
};

exports.findById = async (req, res) => {
    try {
        const productByID = await Product.findById(req.params.id);
        if (!productByID) {
            return res.status(400).send();
        }
        res.send(productByID);
    } catch (error) {
        res.status(500).send();
    }
};

exports.findByCategory = async (req, res) => {
    try {
        const productByCategory = await Product.find({
            "garment.type_garment": req.params.category,
            "information.status": "Disponible"
        }).sort({
            "information.premium": -1
        });
        if (!productByCategory) {
            return res.status(400).send();
        }
        res.send({
            productByCategory,
        });
    } catch (error) {
        res.status(500).send();
    }
};

exports.findBySize = async (req, res) => {
    try {
        const productBySize = await Product.find({
            "garment.size": req.params.size,
            "information.status": "Disponible"
        }).sort({
            "information.premium": -1
        });
        if (!productBySize) {
            return res.status(400).send();
        }
        res.send({
            productBySize,
        });
    } catch (error) {
        res.status(500).send();
    }
};

exports.findByTags = async (req, res) => {
    try {
        const productByTag = await Product.find({
            "tags": req.params.tag,
            "information.status": "Disponible"
        }).sort({
            "information.premium": -1
        });

        if (!productByTag) {
            return res.status(400).send();
        }
        res.send({
            productByTag,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
};

exports.findByIDSeller = async (req, res) => {
    try {
        const productByIDSeller = await Product.find({
            "ID_seller": req.params.id
        }).sort({
            "information.date": -1
        });
        if (!productByIDSeller) {
            return res.status(400).send();
        }
        res.send({
            productByIDSeller
        });
    } catch (error) {
        res.status(500).send();
    }
};

exports.findByIDBuyer = async (req, res) => {
    try {
        const productByIDBuyer = await Product.find({
            "ID_buyer": req.params.id
        }).sort({
            "information.date": 0
        });
        if (!productByIDBuyer) {
            return res.status(400).send();
        }
        res.send({
            productByIDBuyer
        });
    } catch (error) {
        res.status(500).send();
    }
};