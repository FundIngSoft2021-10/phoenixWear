const express = require("express");
const User = require("../models/users");
const Record = require("../models/records");

const router = new express.Router();

// Return all values

router.get("/", async (req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.status(400).send();
        }
        res.send({
            user,
        });
    } catch (error) {
        res.status(500).send();
    }
});

//Return by id

router.get("/findById/:id", async (req, res) => {
    try {
        const userById = await User.findById(req.params.id);
        if (!userById) {
            return res.status(400).send();
        }
        res.send(userById);
    } catch (error) {
        res.status(500).send();
    }
});

router.post("/", async (req, res) => {
    try {
        const user = await new User(req.body).save();
        const record = await new Record({
            "description": "Se crea el usuario: " + user.personal_information.username + "\nDe ID: " + user.id
        }).save();
        res.status(201).send([user, record]);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;