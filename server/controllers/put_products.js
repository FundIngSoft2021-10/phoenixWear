const Product = require("../models/products");
const Record = require("../models/records");

exports.updateState = async(req, res) => {
    try {
        const productByID = await Product.findById(req.params.id);
        if (!productByID) {
            return res.status(404).send();
        }
        //Disponible", "Enviado", "Entregado", "Finalizado
        console.log(productByID.information.status);
        switch (productByID.information.status) {
            case "Disponible":
                productByID.information.status = "Enviado";
                break;
            case "Enviado":
                productByID.information.status = "Entregado";
                break;
            case "Entregado":
                productByID.information.status = "Finalizado";
                break;
        }
        productByID.save();
        res.send(productByID);
    } catch (error) {
        res.status(500).send();
    }
};