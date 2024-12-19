const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Fila = sequelize.define('Fila', {
  posicao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Fila;
