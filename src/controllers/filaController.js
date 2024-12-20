// src/controllers/filaController.js

const { Fila, Pedido } = require('../models');

// Adicionar Pedido na Fila (POST)
exports.adicionarNaFila = async (req, res) => {
  try {
    const { PedidoId, posicao, status } = req.body;

    // Verificar se o Pedido existe
    const pedido = await Pedido.findByPk(PedidoId);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    const novoFila = await Fila.create({ PedidoId, posicao, status });
    res.status(201).json(novoFila);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar pedido na fila', error });
  }
};

// Listar Todos os Pedidos na Fila (GET)
exports.listarFila = async (req, res) => {
  try {
    const fila = await Fila.findAll({
      include: {
        model: Pedido,
        attributes: ['id', 'status', 'valorTotal'],
      },
    });
    res.status(200).json(fila);
  } catch (error) {
    console.error('Erro ao listar pedidos na fila:', error); // Log para diagnóstico
    res.status(500).json({ message: 'Erro ao listar pedidos na fila', error });
  }
};

// Buscar Pedido na Fila por ID (GET)
exports.buscarFilaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const fila = await Fila.findByPk(id, {
      include: {
        model: Pedido,
        attributes: ['id', 'status', 'valorTotal'],
      },
    });

    if (!fila) {
      return res.status(404).json({ message: 'Pedido não encontrado na fila' });
    }

    res.status(200).json(fila);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pedido na fila', error });
  }
};

// Atualizar Status do Pedido na Fila (PUT)
exports.atualizarFila = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, posicao } = req.body;

    const fila = await Fila.findByPk(id);
    if (!fila) {
      return res.status(404).json({ message: 'Pedido não encontrado na fila' });
    }

    await fila.update({ status, posicao });
    res.status(200).json(fila);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar pedido na fila', error });
  }
};

// Remover Pedido da Fila (DELETE)
exports.removerDaFila = async (req, res) => {
  try {
    const { id } = req.params;
    const fila = await Fila.findByPk(id);

    if (!fila) {
      return res.status(404).json({ message: 'Pedido não encontrado na fila' });
    }

    await fila.destroy();
    res.status(204).send(); // Sem conteúdo
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover pedido da fila', error });
  }
};
