const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    estado: {
        type: String,
        enum: ["Disponible", "Enviado", "Entregado", "Finalizado"],
        default: "Disponible",
    },
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
});

const prendaSchema = new Schema({
    ropa: {
        type: String, // Esto esta mal en el diseño ¿Como lo cambio?
    },
    accesorio: {
        type: String,
    },
});

const productSchema = new Schema({
    ID_Producto: {
        type: String,
        required: true,
    },
    informacion: [infoSchema],
    foto: {
        type: Buffer,
        required: true,
    },
    tipo_prenda: {
        type: String,
        enum: ["Chaqueta", "Camisa", "FALTAAAA"],
        required: true,
    },
    prenda: [prendaSchema],
    ID_vendedor: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: usuario,
    },
    calificacion: {
        type: Number,
        required: false,
    },
    premium: {
        type: Boolean,
        required: true,
    },
});