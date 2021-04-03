const User = require("../models/users");

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