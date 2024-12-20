// src/routes/itemPedidoRoutes.js
const express = require('express');
const router = express.Router();
const itemPedidoController = require('../controllers/itemPedidoController');

// CRUD de Itens do Pedido
router.post('/', itemPedidoController.criarItemPedido);             // Criar Item do Pedido
router.get('/', itemPedidoController.listarItensPedido);            // Listar Todos os Itens do Pedido
router.get('/:pedidoId', itemPedidoController.buscarItensPorPedido); // Buscar Itens de um Pedido
router.put('/:id', itemPedidoController.atualizarItemPedido);       // Atualizar Item do Pedido
router.delete('/:id', itemPedidoController.deletarItemPedido);      // Deletar Item do Pedido

module.exports = router;

