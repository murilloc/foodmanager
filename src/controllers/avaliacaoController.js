// src/controllers/avaliacaoController.js

const { Avaliacao, Pedido } = require('../models');

// Criar Avaliação (POST)
exports.criarAvaliacao = async (req, res) => {
  try {
    const { PedidoId, nota, comentario } = req.body;

    // Verificar se o Pedido existe
    const pedido = await Pedido.findByPk(PedidoId);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    const novaAvaliacao = await Avaliacao.create({ PedidoId, nota, comentario });
    res.status(201).json(novaAvaliacao);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar avaliação', error });
  }
};

// Listar Todas as Avaliações
exports.listarAvaliacoes = async (req, res) => {
  try {
    const avaliacoes = await Avaliacao.findAll({
      include: {
        model: Pedido,  // Deve corresponder à associação no modelo
        attributes: ['id', 'status', 'valorTotal'],
      },
    });
    res.status(200).json(avaliacoes);
  } catch (error) {
    console.error('Erro ao listar avaliações:', error);  // Log para diagnóstico
    res.status(500).json({ message: 'Erro ao listar avaliações', error });
  }
};

// Buscar Avaliação por ID (GET)
exports.buscarAvaliacao = async (req, res) => {
  try {
    const { id } = req.params;
    const avaliacao = await Avaliacao.findByPk(id, {
      include: { model: Pedido, attributes: ['id', 'status'] },
    });

    if (!avaliacao) {
      return res.status(404).json({ message: 'Avaliação não encontrada' });
    }

    res.status(200).json(avaliacao);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar avaliação', error });
  }
};

// Atualizar Avaliação (PUT)
exports.atualizarAvaliacao = async (req, res) => {
  try {
    const { id } = req.params;
    const { nota, comentario } = req.body;

    const avaliacao = await Avaliacao.findByPk(id);

    if (!avaliacao) {
      return res.status(404).json({ message: 'Avaliação não encontrada' });
    }

    await avaliacao.update({ nota, comentario });
    res.status(200).json(avaliacao);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar avaliação', error });
  }
};

// Deletar Avaliação (DELETE)
exports.deletarAvaliacao = async (req, res) => {
  try {
    const { id } = req.params;
    const avaliacao = await Avaliacao.findByPk(id);

    if (!avaliacao) {
      return res.status(404).json({ message: 'Avaliação não encontrada' });
    }

    await avaliacao.destroy();
    res.status(204).send(); // Sem conteúdo
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar avaliação', error });
  }
};
