const express = require('express');
const router = express.Router();
const filaController = require('../controllers/filaController');

// Gerenciar a Fila
router.post('/', filaController.adicionarNaFila); // Adicionar pedido na fila
router.get('/', filaController.listarFila); // Listar todos os pedidos na fila
router.put('/:id', filaController.atualizarFila); // Atualizar status da fila
router.delete('/:id', filaController.removerDaFila); // Remover pedido da fila

module.exports = router;
