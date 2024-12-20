// src/models/Avaliacao.js
const mongoose = require('mongoose');

const AvaliacaoSchema = new mongoose.Schema({
  PedidoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido' },
  nota: { type: Number, required: true },
  comentario: { type: String },
  criadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Avaliacao', AvaliacaoSchema);

