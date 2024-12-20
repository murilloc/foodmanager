const ItemPedido = require('../models/ItemPedido');

// Criar ItemPedido
exports.criarItemPedido = async (req, res) => {
    try {
        const novoItemPedido = await ItemPedido.create(req.body);
        res.status(201).json(novoItemPedido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar item do pedido', error });
    }
};

// Listar Todos os Itens do Pedido
exports.listarItensPedido = async (req, res) => {
    try {
        const itensPedido = await ItemPedido.find()
            .populate('PedidoId', 'status valorTotal')   // Popula Pedido
            .populate('ItemId', 'nome valor');          // Popula Item
        res.status(200).json(itensPedido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar itens do pedido', error });
    }
};

// Buscar Itens de um Pedido Específico
exports.buscarItensPorPedido = async (req, res) => {
    try {
        const { pedidoId } = req.params;
        const itensPedido = await ItemPedido.find({ PedidoId: pedidoId })
            .populate('ItemId', 'nome valor');
        if (!itensPedido.length) {
            return res.status(404).json({ message: 'Itens não encontrados para o pedido' });
        }
        res.status(200).json(itensPedido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar itens do pedido', error });
    }
};

// Atualizar ItemPedido
exports.atualizarItemPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const itemAtualizado = await ItemPedido.findByIdAndUpdate(id, req.body, { new: true });
        if (!itemAtualizado) {
            return res.status(404).json({ message: 'Item do pedido não encontrado' });
        }
        res.status(200).json(itemAtualizado);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar item do pedido', error });
    }
};

// Deletar ItemPedido
exports.deletarItemPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const itemRemovido = await ItemPedido.findByIdAndDelete(id);
        if (!itemRemovido) {
            return res.status(404).json({ message: 'Item do pedido não encontrado' });
        }
        res.status(204).send(); // Sem conteúdo
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar item do pedido', error });
    }
};
