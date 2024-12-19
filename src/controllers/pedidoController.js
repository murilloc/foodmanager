const { Pedido, Item, ItemPedido } = require('../models');

// Criar Pedido
exports.criarPedido = async (req, res) => {
  try {
    const { status, valorTotal, itens } = req.body;

    const novoPedido = await Pedido.create({ status, valorTotal });

    if (itens && itens.length > 0) {
      await Promise.all(
        itens.map(async (item) => {
          await ItemPedido.create({
            PedidoId: novoPedido.id,
            ItemId: item.id,
            quantidade: item.quantidade,
            observacao: item.observacao || '',
          });
        })
      );
    }

    res.status(201).json(novoPedido);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pedido', error });
  }
};

// Listar Todos os Pedidos
exports.listarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      include: {
        model: Item,
        through: { attributes: ['quantidade', 'observacao'] },
      },
    });
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar pedidos', error });
  }
};
