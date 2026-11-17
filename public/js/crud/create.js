const pool = require('./db');

async function criarAluno(nome, email, senha) {
  const sql = 'INSERT INTO tbAluno (nome, email, senha) VALUES (?, ?, ?)';
  const [result] = await pool.execute(sql, [nome, email, senha]);
  console.log('Usuário criado com ID:', result.insertId);
}