// server.js
const express = require('express');
require('dotenv').config();
require('./src/config/db'); // Conexão com o MongoDB

// Importação de Rotas
const pedidoRoutes = require('./src/routes/pedidoRoutes');
const itemRoutes = require('./src/routes/itemRoutes');
const avaliacaoRoutes = require('./src/routes/avaliacaoRoutes');
const filaRoutes = require('./src/routes/filaRoutes');
const itemPedidoRoutes = require('./src/routes/itemPedidoRoutes');

// Inicialização da Aplicação
const app = express();
app.use(express.json());

// Registro das Rotas
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/itens', itemRoutes);
app.use('/api/avaliacoes', avaliacaoRoutes);
app.use('/api/fila', filaRoutes);
app.use('/api/item-pedido', itemPedidoRoutes);

// Inicialização do Servidor
app.listen(process.env.APP_PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.APP_PORT}`);
});
