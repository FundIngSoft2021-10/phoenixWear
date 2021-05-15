const express = require("express");
const router = new express.Router();

const getController = require("../controllers/get_users");
const postController = require("../controllers/post_users");
const checkJwt = require("../auth/auth");

router.get("/", getController.getUsers);
router.get("/findById/:id", getController.findById);
router.get("/getMyInfo/:email", checkJwt, getController.getMyInfo);
router.get("/getMyProducts/:email", checkJwt, getController.getMyProducts);
router.get("/getMyPurchase/:email", checkJwt, getController.getMyPurchases);
router.get("/getMyCart/:email", checkJwt, getController.getMyCart);
router.get("/getMyId/:email", checkJwt, getController.getMyId);
router.post("/", postController.postUser);

module.exports = router;