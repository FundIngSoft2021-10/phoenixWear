const express = require("express");
const router = new express.Router();

const Product = require("../models/products");

// Return all values

router.get("/", async(req, res) =>{
    try {
        const product = await Product.find().sort({"information.premium" : -1});
        if (!product) {
            return res.status(400).send();
        }
        res.send({
            product,
        });
    } catch (error){
        res.status(500).send();
    }
});

// Return by id

router.get("/findById/:id", async(req, res) =>{
    try {
        const productByID = await Product.findById(req.params.id);
        if (!productByID) {
            return res.status(400).send();
        }
        res.send(productByID);
    } catch (error){
        res.status(500).send();
    }
});

// Return by category

router.get("/findByCategory/:category", async(req, res) => {
    try {
        const productByCategory = await Product.find({
            "garment.type_garment" : req.params.category,
            "information.status" : "Disponible"
        }).sort({"information.premium" : -1});
        if (!productByCategory) {
            return res.status(400).send();
        }
        res.send({
            productByCategory,
        });
    } catch (error){
        res.status(500).send();
    }
});

// Return by size

router.get("/findBySize/:size", async(req, res) => {
    try {
        const productBySize = await Product.find({
            "garment.size" : req.params.size,
            "information.status" : "Disponible"
        }).sort({"information.premium" : -1});
        if (!productBySize) {
            return res.status(400).send();
        }
        res.send({
            productBySize,
        });
    } catch (error){
        res.status(500).send();
    }
});

// Return by tag (only get one)

router.get("/findByTags/:tag", async(req, res) => {
    try {
        const productByTag = await Product.find({
            "tags" : req.params.tag,
            "information.status" : "Disponible"
        }).sort({"information.premium" : -1});

        if (!productByTag) {
            return res.status(400).send();
        }
        res.send({
            productByTag,
        });
    } catch (error){
        console.log(error);
        res.status(500).send();
    }
});

// Return by ID_Seller

router.get("/findByIDSeller/:id", async(req, res) =>{
    try {
        const productByIDSeller = await Product.find({
            "ID_seller" : req.params.id
        });
        if (!productByIDSeller) {
            return res.status(400).send();
        }
        res.send({
            productByIDSeller
        });
    } catch (error){
        res.status(500).send();
    }
});

// Return by ID_Buyer

router.get("/findByIDBuyer/:id", async(req, res) =>{
    try {
        const productByIDSeller = await Product.find({
            "ID_buyer" : req.params.id
        });
        if (!productByIDSeller) {
            return res.status(400).send();
        }
        res.send({
            productByIDSeller
        });
    } catch (error){
        res.status(500).send();
    }
});

// Post

router.post("/", async(req, res) =>{
    try {
        const product = await new Product(req.body).save();
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;