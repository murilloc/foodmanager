const express = require('express');
const sequelize = require('./src/config/db');
require('dotenv').config();

const app = express();
app.use(express.json());

// Importar rotas
const pedidoRoutes = require('./src/routes/pedidoRoutes');
const itemRoutes = require('./src/routes/itemRoutes');
const avaliacaoRoutes = require('./src/routes/avaliacaoRoutes');
const itemPedidoRoutes = require('./src/routes/itemPedidoRoutes');
const filaRoutes = require('./src/routes/filaRoutes');

// Registrar rotas
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/itens', itemRoutes);
app.use('/api/avaliacoes', avaliacaoRoutes);
app.use('/api/item-pedido', itemPedidoRoutes);
app.use('/api/fila', filaRoutes);

// Inicializar servidor
sequelize.sync({ alter: true }).then(() => {
  app.listen(process.env.APP_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.APP_PORT}`);
  });
});