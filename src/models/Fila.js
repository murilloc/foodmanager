// src/models/Fila.js
const mongoose = require('mongoose');

const FilaSchema = new mongoose.Schema({
  PedidoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido' },
  posicao: { type: Number, required: true },
  status: { type: String, required: true },
  criadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Fila', FilaSchema);

