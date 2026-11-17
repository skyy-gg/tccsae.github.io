const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,       // Endereço do banco (URL ou IP na nuvem)
    user: process.env.DB_USER,       // Usuário do banco
    password: process.env.DB_PASSWORD, // Senha do banco
    database: process.env.DB_NAME,   // Nome do banco de dados
    port: process.env.DB_PORT || 3306 || 4000,
    waitForConnections: true,
    connectionLimit: 10,
    ssl: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true
    }
});

// Teste de conexão ao iniciar o servidor
pool.getConnection()
  .then(connection => {
    console.log('Conectado ao TiDB Cloud (MySQL) com sucesso!');
    connection.release();
  })
  .catch(err => {
    console.error('Erro ao conectar no TiDB Cloud:', err.message);
  });

// Exporta a conexão como uma promessa (facilita o uso de async/await)
module.exports = pool.promise();