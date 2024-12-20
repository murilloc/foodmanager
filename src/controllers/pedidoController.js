// src/controllers/pedidoController.js
const Pedido = require('../models/Pedido');

// Criar Pedido
exports.criarPedido = async (req, res) => {
  try {
    const novoPedido = await Pedido.create(req.body);
    res.status(201).json(novoPedido);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pedido', error });
  }
};

// Listar Pedidos
exports.listarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate('itens.itemId');
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar pedidos', error });
  }
};

// Buscar Pedido por ID
exports.buscarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id).populate('itens.itemId');
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    res.status(200).json(pedido);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pedido', error });
  }
};

// Atualizar Pedido
exports.atualizarPedido = async (req, res) => {
  try {
    const pedidoAtualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!pedidoAtualizado) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    res.status(200).json(pedidoAtualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar pedido', error });
  }
};

// Deletar Pedido
exports.deletarPedido = async (req, res) => {
  try {
    const pedidoDeletado = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedidoDeletado) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    res.status(204).send(); // Sem conteúdo
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar pedido', error });
  }
};
