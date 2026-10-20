const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,       // Endereço do banco (URL ou IP na nuvem)
    user: process.env.DB_USER,       // Usuário do banco
    password: process.env.DB_PASSWORD, // Senha do banco
    database: process.env.DB_NAME,   // Nome do banco de dados
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10
});

// Exporta a conexão como uma promessa (facilita o uso de async/await)
module.exports = pool.promise();