const express = require("express");
const router = new express.Router();

const Trs = require("../models/transactions");

// Return all values

router.get("/", async (req, res) => {
    try {
        const trs = await Trs.find().sort({
            "date": 0
        });
        if (!trs) {
            return res.status(400).send();
        }
        res.send(trs);
    } catch (error) {
        res.status(500).send();
    }
});

//Return by id

router.get("/findById/:id", async (req, res) => {
    try {
        const trsById = await Trs.findById(req.params.id);
        if (!trsById) {
            return res.status(400).send();
        }
        res.send(trsById);
    } catch (error) {
        res.status(500).send();
    }
});

// Return by ID_Seller

router.get("/findByIDSeller/:id", async (req, res) => {
    try {
        const trsByIDSeller = await Trs.find({
            "ID_seller": req.params.id
        }).sort({
            "date": 0
        });
        if (!trsByIDSeller) {
            return res.status(400).send();
        }
        res.send({
            trsByIDSeller
        });
    } catch (error) {
        res.status(500).send();
    }
});

// Return by ID_Buyer

router.get("/findByIDBuyer/:id", async (req, res) => {
    try {
        const trsByIDBuyer = await Trs.find({
            "ID_buyer": req.params.id
        }).sort({
            "date": 0
        });
        if (!trsByIDBuyer) {
            return res.status(400).send();
        }
        res.send({
            trsByIDBuyer
        });
    } catch (error) {
        res.status(500).send();
    }
});

// Return by ID_Product

router.get("/findByIDBuyer/:id", async (req, res) => {
    try {
        const trsByIDProduct = await Trs.find({
            "ID_product": req.params.id
        });
        if (!trsByIDProduct) {
            return res.status(400).send();
        }
        res.send(trsByIDProduct);
    } catch (error) {
        res.status(500).send();
    }
});



router.post("/", async (req, res) => {
    try {
        const trs = await new Trs(req.body).save();
        res.status(201).send(trs);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;