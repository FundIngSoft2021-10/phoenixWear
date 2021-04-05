require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const recordsRouter = require("./routes/records");
const recordsUser = require("./routes/users");
const recordsProduct = require("./routes/products");
const recordsTransaction = require("./routes/transactions");
const allowlist = ["https://n4mbc432.herokuapp.com", "http://localhost:8080"];
console.log(allowlist);

const app = express();
//CORS
var corsOptions = {
    origin: ["http://localhost:8080", "https://phoenixwear.herokuapp.com/"],
    optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(express.json());

//middlewears
app.use("/records", recordsRouter);
app.use("/users", recordsUser);
app.use("/products", recordsProduct);
app.use("/transactions", recordsTransaction);

module.exports = app;