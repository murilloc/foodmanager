const { Item } = require('../models');

// Criar Item
exports.criarItem = async (req, res) => {
  try {
    const { nome, descricao, valor, imagem } = req.body;
    if (!nome || !descricao || !valor || !imagem) {
      return res
        .status(400)
        .json({ message: 'Todos os campos são obrigatórios' });
    }
    const novoItem = await Item.create({ nome, descricao, valor, imagem });
    res.status(201).json(novoItem);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar item', error });
  }
};

// Listar Itens
exports.listarItens = async (req, res) => {
  try {
    const itens = await Item.findAll();
    res.json(itens);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar itens', error });
  }
};
