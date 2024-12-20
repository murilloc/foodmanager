// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String },
    valor: { type: Number, required: true },
    imagem: { type: String },
    criadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', ItemSchema);


