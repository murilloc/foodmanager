const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Pedido = require('./Pedido');

const Avaliacao = sequelize.define('Avaliacao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nota: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true, // Cria campos createdAt e updatedAt automaticamente
});

// Associações
Pedido.hasMany(Avaliacao, { foreignKey: 'PedidoId' });
Avaliacao.belongsTo(Pedido, { foreignKey: 'PedidoId' });

module.exports = Avaliacao;
