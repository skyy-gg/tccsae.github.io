const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'localhost',           //process.env.DB_HOST,       Endereço do banco (URL ou IP na nuvem)
    user: 'root',       // Usuário do banco
    password: 'AbobrinhaGamer', // Senha do banco
    database: 'SITE',   // Nome do banco de dados
    port: '3306',
    waitForConnections: true,
    connectionLimit: 10
});

// Exporta a conexão como uma promessa (facilita o uso de async/await)
module.exports = pool.promise();