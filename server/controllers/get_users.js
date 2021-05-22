const User = require("../models/users");
const Product = require("../models/products");

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

exports.getMyInfo = async (req, res) => {
  try {
    const userByEmail = await User.find({
      email: req.params.email,
    });
    if (!userByEmail) {
      return res.status(400).send();
    }
    const info = {
      _id: userByEmail[0]._id,
      score: userByEmail[0].score,
      numProducts: userByEmail[0].own_products.length,
      numProductsPur: userByEmail[0].purchased_products.length,
      email: userByEmail[0].email,
      personal_information: userByEmail[0].personal_information,
    };
    res.send(info);
  } catch (error) {
    res.status(500).send();
  }
};

exports.getMyProducts = async (req, res) => {
  try {
    const userByEmail = await User.findOne({
      email: req.params.email,
    }).populate("own_products");
    if (!userByEmail) {
      return res.status(400).send();
    }
    res.send(userByEmail.own_products);
  } catch (error) {
    res.status(500).send();
  }
};
exports.getMyPurchases = async (req, res) => {
  try {
    const userByEmail = await User.findOne({
      email: req.params.email,
    }).populate("purchased_products");
    if (!userByEmail) {
      return res.status(400).send();
    }
    res.send(userByEmail.purchased_products);
  } catch (error) {
    res.status(500).send();
  }
};
exports.getMyCart = async (req, res) => {
  try {
    const userByEmail = await User.findOne({
      email: req.params.email,
    }).populate("cart");
    if (!userByEmail) {
      return res.status(400).send();
    }
    const prueba = [];
    for (let index = 0; index < userByEmail.cart.products.length; index++) {
      const element = userByEmail.cart.products[index];
      //console.log(element);
      try {
        const productByID = await Product.findById(element);
        if (!productByID) {
          return res.status(400).send();
        }
        prueba.push({
          "_id": productByID._id,
          "information": {
            "name": productByID.information.name,
            "price": productByID.information.price,
            "short_decription": productByID.information.short_decription,
            "img": productByID.information.photo[0],
            "description": productByID.information.description,
          },
          "tags": productByID.tags,
        });
        //console.log(prueba.length)
      } catch (error) {
        console.log(error);
        res.status(500).send();
      }
    }
    res.send(prueba);
  } catch (error) {
    res.status(500).send();
  }
};

exports.getMyId = async (req, res) => {
  try {
    const userByEmail = await User.find({
      email: req.params.email,
    });
    if (!userByEmail) {
      return res.status(400).send();
    }
    const id = userByEmail[0]._id;
    res.send(id);
  } catch (error) {
    res.status(500).send();
  }
};
