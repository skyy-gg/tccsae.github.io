const pool = require('../../db');

async function authAluno(Email, Senha) {
    try {

        const sql = 'SELECT Id_aluno FROM tbAluno WHERE Email = ? and Senha = ?';
        const [result] = await pool.execute(sql, [Email, Senha]);

        
        const usuario = result.length === 0? false: result[0];

        console.log(usuario)

        if ( usuario != false || usuario.Id_aluno > 0) {
            
            console.log('Usuário Encontrado.');
            return{ autenticado: true, mensagem: 'Login bem-sucedido!'}

        }else {

            console.log('Usuário não encontrado.');
            return { autenticado: false, mensagem: 'E-mail ou senha inválidos.' };

        }

    } catch (error) {
        console.error('Erro ao tentar autenticar:', error);
        throw error;
    }

}
