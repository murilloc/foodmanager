// src/models/ItemPedido.js
const mongoose = require('mongoose');

// Definição do Schema
const ItemPedidoSchema = new mongoose.Schema({
  PedidoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pedido', // Referência para a coleção Pedido
    required: true,
  },
  ItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item', // Referência para a coleção Item
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
    min: 1,
  },
  observacao: {
    type: String,
    default: '',
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

// Exporta o Modelo
module.exports = mongoose.model('ItemPedido', ItemPedidoSchema);

