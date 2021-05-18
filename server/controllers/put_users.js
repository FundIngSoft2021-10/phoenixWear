const User = require("../models/users");

exports.addNewProduct = async(req, res) => {
    try {
        console.log(req.body.id);
        const userByID = await User.findById(req.params.id);
        if (!userByID) {
            return res.status(404).send();
        }
        console.log(req.body);
        userByID.own_products.push(req.body.id);
        userByID.save();
        res.send(userByID);
    } catch (error) {
        res.status(500).send();
    }
};