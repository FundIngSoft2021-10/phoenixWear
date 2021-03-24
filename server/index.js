const express = require("express");

const app = express();

/*Middlewares */

/*Server Conection */
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running in port ${port}`);
});