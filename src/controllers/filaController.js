// src/controllers/filaController.js
const Fila = require('../models/Fila');

// Adicionar Pedido na Fila
exports.adicionarNaFila = async (req, res) => {
  try {
    const novaFila = await Fila.create(req.body);
    res.status(201).json(novaFila);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar pedido na fila', error });
  }
};

// Listar Todos os Pedidos na Fila
exports.listarFila = async (req, res) => {
  try {
    const fila = await Fila.find().populate('PedidoId', 'status valorTotal');
    res.status(200).json(fila);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar pedidos na fila', error });
  }
};

// Buscar Pedido na Fila por ID
exports.buscarFilaPorId = async (req, res) => {
  try {
    const fila = await Fila.findById(req.params.id).populate('PedidoId', 'status valorTotal');
    if (!fila) {
      return res.status(404).json({ message: 'Pedido não encontrado na fila' });
    }
    res.status(200).json(fila);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pedido na fila', error });
  }
};

// Atualizar Pedido na Fila
exports.atualizarFila = async (req, res) => {
  try {
    const filaAtualizada = await Fila.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!filaAtualizada) {
      return res.status(404).json({ message: 'Pedido não encontrado na fila' });
    }
    res.status(200).json(filaAtualizada);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar pedido na fila', error });
  }
};

// Remover Pedido da Fila
exports.removerDaFila = async (req, res) => {
  try {
    const filaRemovida = await Fila.findByIdAndDelete(req.params.id);
    if (!filaRemovida) {
      return res.status(404).json({ message: 'Pedido não encontrado na fila' });
    }
    res.status(204).send(); // Sem conteúdo
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover pedido da fila', error });
  }
};
