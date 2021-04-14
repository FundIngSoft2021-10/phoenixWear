const express = require("express");
const router = new express.Router();

const getController = require("../controllers/get_products");
const postController = require("../controllers/post_products");

router.get("/", getController.getProducts);
router.get("/findById/:id", getController.findById);
router.get("/findByCategory/:category", getController.findByCategory);
router.get("/findBySize/:size", getController.findBySize);
router.get("/findByTags/:tag", getController.findByTags);
router.get("/findByIDSeller/:id", getController.findByIDSeller);
router.get("/findByIDBuyer/:id", getController.findByIDBuyer);

router.post("/", postController.postProduct);

module.exports = router;