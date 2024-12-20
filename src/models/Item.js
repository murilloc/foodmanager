// src/models/Item.js
const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    imagem: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true, // Cria campos createdAt e updatedAt automaticamente
});

module.exports = Item;

