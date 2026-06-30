const mysql = require("mysql2");

const conexao = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Rodriguesdj13*",
    database: "gama"
});

module.exports = conexao;
