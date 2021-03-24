require("./data/mongoose");
const express = require("express");
const recordsRouter = require("./routes/records");

const app = express();

app.use(express.json());

//middlewears
app.use("/", recordsRouter);

module.exports = app;