const express = require("express");
const router = new express.Router();

const usersController = require("../controllers/users");

router.get("/", usersController.getUsers);
router.get("/findById/:id", usersController.findById);

router.post("/", usersController.postAUser);

module.exports = router;