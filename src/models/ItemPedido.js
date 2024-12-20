const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Pedido = require('./Pedido');
const Item = require('./Item');

const ItemPedido = sequelize.define('ItemPedido', {
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  observacao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true, // Cria campos createdAt e updatedAt automaticamente
});

Pedido.belongsToMany(Item, { through: ItemPedido });
Item.belongsToMany(Pedido, { through: ItemPedido });

module.exports = ItemPedido;
