// src/index.js
const mongoose = require('./src/config/db');

// Importa os Modelos
const Pedido = require('./src/models/Pedido');
const Item = require('./src/models/Item');
const Avaliacao = require('./src/models/Avaliacao');
const Fila = require('./src/models/Fila');
const ItemPedido = require('./src/models/ItemPedido');

// Associações de Modelos
// Associações de ItemPedido
Pedido.hasMany(ItemPedido, { foreignKey: 'PedidoId' });
Item.hasMany(ItemPedido, { foreignKey: 'ItemId' });
ItemPedido.belongsTo(Pedido, { foreignKey: 'PedidoId' });
ItemPedido.belongsTo(Item, { foreignKey: 'ItemId' });

// Associações de Avaliações
Pedido.hasMany(Avaliacao, { foreignKey: 'PedidoId' });
Avaliacao.belongsTo(Pedido, { foreignKey: 'PedidoId' });

// Associações de Fila
Pedido.hasMany(Fila, { foreignKey: 'PedidoId' });
Fila.belongsTo(Pedido, { foreignKey: 'PedidoId' });

const iniciarModelos = async () => {
  try {
    await mongoose.connection;
    console.log('Modelos e Banco de Dados inicializados com sucesso.');
  } catch (error) {
    console.error('Erro ao inicializar o Banco de Dados:', error);
  }
};

module.exports = {
  Pedido,
  Item,
  Avaliacao,
  Fila,
  ItemPedido,
  iniciarModelos,
};
