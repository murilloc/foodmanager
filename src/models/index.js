// src/models/index.js
const sequelize = require('../config/db');
const Pedido = require('./Pedido');
const Item = require('./Item');
const ItemPedido = require('./ItemPedido');
const Avaliacao = require('./Avaliacao');
const Fila = require('./Fila');

const iniciarModelos = async () => {
  try {
    await sequelize.sync({ alter: true }); // Cria ou ajusta tabelas automaticamente
    console.log('Tabelas criadas/atualizadas com sucesso.');
  } catch (error) {
    console.error('Erro ao criar tabelas:', error);
  }
};

module.exports = {
  sequelize,
  Pedido,
  Item,
  ItemPedido,
  Avaliacao,
  Fila,
  iniciarModelos,
};

