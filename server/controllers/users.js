const User = require("../models/users");
const Record = require("../models/records");

exports.getUsers = async (req, res) => {
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
};

exports.findById = async (req, res) => {
    try {
        const userById = await User.findById(req.params.id);
        if (!userById) {
            return res.status(400).send();
        }
        res.send(userById);
    } catch (error) {
        res.status(500).send();
    }
};

exports.postAUser = async (req, res) => {
    try {
        const user = await new User(req.body).save();
        const record = await new Record({
            "description": "Se crea el usuario: " + user.personal_information.username + "\nDe ID: " + user.id
        }).save();
        res.status(201).send([user, record]);
    } catch (error) {
        res.status(500).send(error);
    }
};