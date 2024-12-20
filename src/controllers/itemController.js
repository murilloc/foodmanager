// src/controllers/itemController.js
const Item = require('../models/Item');

// Criar Item
exports.criarItem = async (req, res) => {
  try {
    const novoItem = await Item.create(req.body);
    res.status(201).json(novoItem);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar item', error });
  }
};

// Listar Todos os Itens
exports.listarItens = async (req, res) => {
  try {
    const itens = await Item.find();
    res.status(200).json(itens);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar itens', error });
  }
};

// Buscar Item por ID
exports.buscarItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item não encontrado' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar item', error });
  }
};

// Atualizar Item
exports.atualizarItem = async (req, res) => {
  try {
    const itemAtualizado = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!itemAtualizado) {
      return res.status(404).json({ message: 'Item não encontrado' });
    }
    res.status(200).json(itemAtualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar item', error });
  }
};

// Deletar Item
exports.deletarItem = async (req, res) => {
  try {
    const itemDeletado = await Item.findByIdAndDelete(req.params.id);
    if (!itemDeletado) {
      return res.status(404).json({ message: 'Item não encontrado' });
    }
    res.status(204).send(); // Sem conteúdo
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar item', error });
  }
};
