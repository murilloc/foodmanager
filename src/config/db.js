// src/config/db.js
const mongoose = require('mongoose');

// Conexão com o Banco de Dados
mongoose
    .connect('mongodb://admin:changeme@localhost:27017/foodmanager?authSource=admin')
    .then(() => {
        console.log('Conexão estabelecida com sucesso ao MongoDB.');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao MongoDB:', error);
    });

module.exports = mongoose;
