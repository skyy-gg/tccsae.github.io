const pool = require('../../../db');

async function deleteAluno(id) {
    const sql = 'DELETE FROM tbAluno WHERE Id_aluno = ?';
    const [] = await pool.execute(sql, [id]);
    console.log(`Aluno com ID = ${id} foi deletado.`)
}

deleteAluno(1);