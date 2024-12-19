const express = require('express');
const router = express.Router();
const itemPedidoController = require('../controllers/itemPedidoController');

// CRUD de Itens do Pedido
router.post('/', itemPedidoController.criarItemPedido); // Criar item do pedido
router.get('/', itemPedidoController.listarItensPedido); // Listar itens dos pedidos
router.get('/:pedidoId', itemPedidoController.buscarItensPedido); // Buscar itens de um pedido específico

module.exports = router;
