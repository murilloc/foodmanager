const { Fila, Pedido } = require('../models');

// Adicionar Pedido na Fila
exports.adicionarNaFila = async (req, res) => {
  try {
    const { PedidoId, posicao, status } = req.body;

    const novoFila = await Fila.create({ PedidoId, posicao, status });
    res.status(201).json(novoFila);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erro ao adicionar pedido na fila', error });
  }
};

// Listar Fila
exports.listarFila = async (req, res) => {
  try {
    const fila = await Fila.findAll({
      include: { model: Pedido },
    });
    res.json(fila);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar fila', error });
  }
};
