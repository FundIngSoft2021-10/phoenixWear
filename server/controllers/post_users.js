const User = require("../models/users");
const Record = require("../models/records");

exports.postUser = async (req, res) => {
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