const express = require("express");
const router = new express.Router();
const mongoose = require('mongoose');

const Product = require("../models/products");

// Return all values

router.get("/", async(req, res) =>{
    try {
        const product = await Product.find();
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

router.get("/:id", async(req, res) =>{
    try {
        const productById = await Product.findById(req.params.id);
        if (!productById) {
            return res.status(400).send();
        }
        res.send({
            productById,
        });
    } catch (error){
        res.status(500).send();
    }
});

router.get("/:id", async(req, res, next) =>{
    try {
        const productById = await Product.findById(req.params.id);
        if (!productById) {
            return res.status(400).send();
        }
        res.send({
            productById,
        });
    } catch (error){
        res.status(500).send();
    }
});


router.post("/", async(req, res) =>{
    try {
        const product = await new Product(req.body).save();
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;