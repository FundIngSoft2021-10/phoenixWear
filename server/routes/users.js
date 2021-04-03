const express = require("express");
const router = new express.Router();

const getController = require("../controllers/get_users");
const postController = require("../controllers/post_users");

router.get("/", getController.getUsers);
router.get("/findById/:id", getController.findById);

router.post("/", postController.postUser);

module.exports = router;