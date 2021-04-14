const express = require("express");
const router = new express.Router();
const Img = require("../models/test");
const multer = require("multer");
const sharp = require("sharp");
const Record = require("../models/records");

// upload a file
const upload = multer({
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/.(jpg|jpeg|png)$/)) {
            return cb(new Error("File must be an image"));
        }
        return cb(undefined, true);
    },
});

// upload profile picture
router.post(
    "/",
    upload.single("avatar"),
    async(req, res) => {
        console.log(req);
        const buffer = await sharp(req.file.buffer)
            .resize({ width: 250, height: 250 })
            .png()
            .toBuffer();
        res.status(201).send(Img);
    },
    (error, req, res, next) => {
        res.status(400).send({ error: error.message });
    }
);
router.get("/", async(req, res) => {
    try {
        const record = await Record.find().sort({
            date: -1,
        });
        if (!record) {
            return res.status(400).send();
        }
        res.send({
            record,
        });
    } catch (error) {
        res.status(500).send();
    }
});
// serve the profile picture
/*router.get("/Imgs/:id/avatar", async (req, res) => {
  try {
    const Img = await Img.findById(req.params.id);

    if (!Img || !Img.avatar) {
      throw new Error();
    }

    res.set("Content-Type", "image/png"); //set headers
    res.send(Img.avatar);
  } catch (error) {
    res.status(404).send();
  }
});*/

module.exports = router;