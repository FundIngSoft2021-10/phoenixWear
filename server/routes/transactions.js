const express = require("express");
const router = new express.Router();

const getController = require("../controllers/get_transactions");
const postController = require("../controllers/post_transactions");

router.get("/", getController.getTrs);
router.get("/findById/:id", getController.findById);
router.get("/findByIDSeller/:id", getController.findByIDSeller);
router.get("/findByIDBuyer/:id", getController.findByIDBuyer);
router.get("/findByIDProduct/:id", getController.findByIDProduct);

router.post("/", postController.postTransaction);



module.exports = router;