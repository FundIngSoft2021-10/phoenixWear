const express = require("express");
const router = new express.Router();

const productsController = require("../controllers/products");

router.get("/", productsController.getProducts);
router.get("/findById/:id", productsController.findById);
router.get("/findByCategory/:category", productsController.findByCategory);
router.get("/findBySize/:size", productsController.findBySize);
router.get("/findByTags/:tag", productsController.findByTags);
router.get("/findByIDSeller/:id", productsController.findByIDSeller);
router.get("/findByIDBuyer/:id", productsController.findByIDBuyer);

router.post("/", productsController.postAProduct);

module.exports = router;