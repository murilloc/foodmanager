// src/config/db.js

const {Sequelize} = require('sequelize');

// Configuração do Banco de Dados
const sequelize = new Sequelize(
    'foodmanager_db',
    'foodmanager_user',
    'foodmanager_pass',
    {
        host: 'localhost',  // Host do banco de dados
        port: 33306,  // Porta do banco de dados
        dialect: 'mysql',           // Dialeto do Banco
        logging: false,             // Desabilita logs de consultas
        dialectOptions: {
            connectTimeout: 10000,    // Tempo limite para conexão
        },
        define: {
            timestamps: true,         // Ativa timestamps por padrão
            freezeTableName: true,    // Evita pluralização automática
        },
        pool: {
            max: 5,                   // Número máximo de conexões
            min: 0,                   // Número mínimo de conexões
            acquire: 30000,           // Tempo máximo para aquisição de conexão
            idle: 10000,              // Tempo ocioso máximo antes de liberar conexão
        },
    }
);

// Teste de Conexão
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error);
    });

module.exports = sequelize;


