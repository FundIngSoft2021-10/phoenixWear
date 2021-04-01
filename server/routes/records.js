const express = require("express");
const router = new express.Router();

const recordsController = require("../controllers/records");

router.get("/", recordsController.getRecords);
router.get("/findById/:id", recordsController.findById);

router.post("/", recordsController.post);

module.exports = router;