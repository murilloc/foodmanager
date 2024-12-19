const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

// CRUD de Avaliações
router.post('/', avaliacaoController.criarAvaliacao); // Criar nova avaliação
router.get('/', avaliacaoController.listarAvaliacoes); // Listar todas as avaliações
router.get('/:id', avaliacaoController.buscarAvaliacao); // Buscar avaliação por ID
router.delete('/:id', avaliacaoController.deletarAvaliacao); // Deletar avaliação por ID

module.exports = router;
