const pool = require('./db');

async function exibirAluno(nome) {
    const sql = 'SELECT Id_aluno, Nome, Email FROM tbAluno WHERE nome = ?';
    const [rows] = await pool.execute(sql, [nome]);
    console.log('Usuário Encontrado: ', rows[0]);
}