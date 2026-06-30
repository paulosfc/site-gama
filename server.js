const conexao = require("./database/conexao");

conexao.getConnection((erro) => {
    if(erro){
        console.log(erro);
    } else {
        console.log('Banco conectado!');
    }
});