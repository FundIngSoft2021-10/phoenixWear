const express = require("express");
const router = new express.Router();

const trsController = require("../controllers/transactions");

router.get("/", trsController.getTrs);
router.get("/findById/:id", trsController.findById);
router.get("/findByIDSeller/:id", trsController.findByIDSeller);
router.get("/findByIDBuyer/:id", trsController.findByIDBuyer);
router.get("/findByIDProduct/:id", trsController.findByIDProduct);

router.post("/", trsController.postATrs);



module.exports = router;