const express = require("express");
const router = new express.Router();

const getController = require("../controllers/get_records");
const postController = require("../controllers/post_records");

router.get("/", getController.getRecords);
router.get("/findById/:id", getController.findById);

router.post("/", postController.postRecord);

module.exports = router;