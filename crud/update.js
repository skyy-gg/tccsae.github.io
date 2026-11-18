const pool = require('../db');

async function updateAluno(id, campo, novoValor) {

    const sql = `UPDATE tbAluno SET ${campo} = ? WHERE Id_aluno = ?`;
    const [] = await pool.execute(sql, [novoValor, id])
    console.log(`Valor do campo ${campo} do Usuario com id = ${id} foi alterado para ${novoValor}`);

}
