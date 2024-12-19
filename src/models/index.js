const sequelize = require('../config/db');
const Pedido = require('./Pedido');
const Item = require('./Item');
const ItemPedido = require('./ItemPedido');
const Avaliacao = require('./Avaliacao');
const Fila = require('./Fila');

// Sincronizar todos os modelos
sequelize.sync({ alter: true }).then(() => {
  console.log('Modelos sincronizados com o banco de dados.');
});

module.exports = {
  Pedido,
  Item,
  ItemPedido,
  Avaliacao,
  Fila,
};
