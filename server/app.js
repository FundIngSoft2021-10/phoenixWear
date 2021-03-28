require("./data/mongoose");
const express = require("express");

const recordsRouter = require("./routes/records");
const recordsUser = require("./routes/users");
const recordsProduct = require("./routes/products");

const app = express();

app.use(express.json());

//middlewears
app.use("/", recordsRouter);
app.use("/user", recordsUser);
app.use("/product", recordsProduct);
app.use("/transactions", recordsProduct);

module.exports = app;