const { Avaliacao } = require('../models');

// Criar Avaliação
exports.criarAvaliacao = async (req, res) => {
  try {
    const { nota, comentario } = req.body;
    const novaAvaliacao = await Avaliacao.create({ nota, comentario });
    res.status(201).json(novaAvaliacao);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar avaliação', error });
  }
};

// Listar Avaliações
exports.listarAvaliacoes = async (req, res) => {
  try {
    const avaliacoes = await Avaliacao.findAll();
    res.json(avaliacoes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar avaliações', error });
  }
};
