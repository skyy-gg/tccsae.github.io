const express = require('express');
const path = require('path');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'), {extensions: ['html']}));

app.listen(PORT, () => {
  console.log(`Servidor iniciado em ${PORT}`);
});

async function testarConexao() {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS resultado');
    console.log('Conexão com o MySQL realizada com sucesso!', rows);
  } catch (err) {
    console.error('Erro ao conectar no MySQL:', err);
  }
}

testarConexao();