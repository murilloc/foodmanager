// src/controllers/itemController.js
const { Item } = require('../models');

// Criar Item
exports.criarItem = async (req, res) => {
  try {
    const { nome, descricao, valor, imagem } = req.body;
    const novoItem = await Item.create({ nome, descricao, valor, imagem });
    res.status(201).json(novoItem);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar item', error });
  }
};

// Listar Todos os Itens
exports.listarItens = async (req, res) => {
  try {
    const itens = await Item.findAll();
    res.status(200).json(itens);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar itens', error });
  }
};

// Buscar Item por ID
exports.buscarItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);
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
    const { id } = req.params;
    const { nome, descricao, valor, imagem } = req.body;
    const item = await Item.findByPk(id);

    if (!item) {
      return res.status(404).json({ message: 'Item não encontrado' });
    }

    await item.update({ nome, descricao, valor, imagem });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar item', error });
  }
};

// Deletar Item
exports.deletarItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);

    if (!item) {
      return res.status(404).json({ message: 'Item não encontrado' });
    }

    await item.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar item', error });
  }
};

