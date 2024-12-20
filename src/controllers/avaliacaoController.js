// src/controllers/avaliacaoController.js
const Avaliacao = require('../models/Avaliacao');

// Criar Avaliação
exports.criarAvaliacao = async (req, res) => {
  try {
    const novaAvaliacao = await Avaliacao.create(req.body);
    res.status(201).json(novaAvaliacao);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar avaliação', error });
  }
};

// Listar Todas as Avaliações
exports.listarAvaliacoes = async (req, res) => {
  try {
    const avaliacoes = await Avaliacao.find().populate('PedidoId', 'status valorTotal');
    res.status(200).json(avaliacoes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar avaliações', error });
  }
};

// Buscar Avaliação por ID
exports.buscarAvaliacao = async (req, res) => {
  try {
    const avaliacao = await Avaliacao.findById(req.params.id).populate('PedidoId', 'status valorTotal');
    if (!avaliacao) {
      return res.status(404).json({ message: 'Avaliação não encontrada' });
    }
    res.status(200).json(avaliacao);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar avaliação', error });
  }
};

// Atualizar Avaliação
exports.atualizarAvaliacao = async (req, res) => {
  try {
    const avaliacaoAtualizada = await Avaliacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!avaliacaoAtualizada) {
      return res.status(404).json({ message: 'Avaliação não encontrada' });
    }
    res.status(200).json(avaliacaoAtualizada);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar avaliação', error });
  }
};

// Deletar Avaliação
exports.deletarAvaliacao = async (req, res) => {
  try {
    const avaliacaoDeletada = await Avaliacao.findByIdAndDelete(req.params.id);
    if (!avaliacaoDeletada) {
      return res.status(404).json({ message: 'Avaliação não encontrada' });
    }
    res.status(204).send(); // Sem conteúdo
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar avaliação', error });
  }
};
