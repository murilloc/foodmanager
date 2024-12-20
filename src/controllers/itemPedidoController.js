// src/controllers/itemPedidoController.js

const { ItemPedido, Pedido, Item } = require('../models');

// Criar Item do Pedido (POST)
exports.criarItemPedido = async (req, res) => {
    try {
        const { PedidoId, ItemId, quantidade, observacao } = req.body;

        // Verificar se o Pedido e o Item existem
        const pedido = await Pedido.findByPk(PedidoId);
        const item = await Item.findByPk(ItemId);

        if (!pedido || !item) {
            return res.status(404).json({ message: 'Pedido ou Item não encontrado' });
        }

        const novoItemPedido = await ItemPedido.create({
            PedidoId,
            ItemId,
            quantidade,
            observacao,
        });

        res.status(201).json(novoItemPedido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar ItemPedido', error });
    }
};

// Listar Todos os Itens do Pedido (GET)
exports.listarItensPedido = async (req, res) => {
    try {
        const itensPedido = await ItemPedido.findAll({
            include: [
                { model: Pedido, attributes: ['id', 'status'] },
                { model: Item, attributes: ['nome', 'valor'] },
            ],
        });
        res.status(200).json(itensPedido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar itens do pedido', error });
    }
};

// Buscar Itens de um Pedido por ID (GET)
exports.buscarItensPedido = async (req, res) => {
    try {
        const { pedidoId } = req.params;

        const itensPedido = await ItemPedido.findAll({
            where: { PedidoId: pedidoId },
            include: { model: Item, attributes: ['nome', 'valor'] },
        });

        if (!itensPedido.length) {
            return res.status(404).json({ message: 'Itens não encontrados para o pedido' });
        }

        res.status(200).json(itensPedido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar itens do pedido', error });
    }
};

// Atualizar Item do Pedido (PUT)
exports.atualizarItemPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantidade, observacao } = req.body;

        const itemPedido = await ItemPedido.findByPk(id);

        if (!itemPedido) {
            return res.status(404).json({ message: 'Item do Pedido não encontrado' });
        }

        await itemPedido.update({ quantidade, observacao });
        res.status(200).json(itemPedido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar ItemPedido', error });
    }
};

// Deletar Item do Pedido (DELETE)
exports.deletarItemPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const itemPedido = await ItemPedido.findByPk(id);

        if (!itemPedido) {
            return res.status(404).json({ message: 'Item do Pedido não encontrado' });
        }

        await itemPedido.destroy();
        res.status(204).send(); // Sem conteúdo
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar ItemPedido', error });
    }
};
