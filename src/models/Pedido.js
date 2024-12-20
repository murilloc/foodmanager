// src/models/Pedido.js
const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  status: { type: String, required: true },
  valorTotal: { type: Number, required: true, default: 0.0 },
  itens: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
      quantidade: { type: Number, required: true },
      observacao: { type: String },
    },
  ],
  dataPedido: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pedido', PedidoSchema);

