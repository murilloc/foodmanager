const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Pedido = require('./Pedido');

const Fila = sequelize.define('Fila', {
  posicao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Cria campos createdAt e updatedAt automaticamente
});

// Associações
Pedido.hasMany(Fila, { foreignKey: 'PedidoId' });
Fila.belongsTo(Pedido, { foreignKey: 'PedidoId' });

module.exports = Fila;
