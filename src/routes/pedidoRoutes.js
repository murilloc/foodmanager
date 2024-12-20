
const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Criar Pedido
router.post('/', pedidoController.criarPedido);

// Listar Todos os Pedidos
router.get('/', pedidoController.listarPedidos);

// Buscar Pedido por ID
router.get('/:id', pedidoController.buscarPedido);

// Atualizar Pedido por ID
router.put('/:id', pedidoController.atualizarPedido);

// Deletar Pedido por ID
router.delete('/:id', pedidoController.deletarPedido);

module.exports = router;

