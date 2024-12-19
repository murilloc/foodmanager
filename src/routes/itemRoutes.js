const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// CRUD de Itens
router.post('/', itemController.criarItem); // Criar novo item
router.get('/', itemController.listarItens); // Listar todos os itens
router.get('/:id', itemController.buscarItem); // Buscar item por ID
router.put('/:id', itemController.atualizarItem); // Atualizar item por ID
router.delete('/:id', itemController.deletarItem); // Deletar item por ID

module.exports = router;
