require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const recordsRouter = require("./routes/records");
const recordsUser = require("./routes/users");
const recordsProduct = require("./routes/products");
const recordsTransaction = require("./routes/transactions");

const app = express();
app.use(cors());
app.use(express.json());

//middlewears
app.use("/records", recordsRouter);
app.use("/users", recordsUser);
app.use("/products", recordsProduct);
app.use("/transactions", recordsTransaction);

module.exports = app;