const express = require('express');

const app = express();

app.use(express.json());

/** 
    Métodos HTTP:

    GET: Buscar/Listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end

*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação). Podemos concatenar com params através do "&"
 *          Ex: http://localhost:3333/users?nome=Junior&idade=22
 * 
 * Route Params: Parâmetros utilizados para identificar recursos
 *          Ex: http://localhost:3333/users/1
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, MS SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Abordagens
 * 
 * Driver: Utiliza a linguagem SQL: "SELECT * FROM users"
 * Query Builder: Utiliza o javascript: table('users').select('*').where()...
 * Query Builder: knex.js
 */

/**Route Params, é necessário colocar no recurso ":nome_variavel" 
 * 
 * app.get('/users/:id', (request, response) => {
 * 
 * */

 /**
  * Body Params, necessário ser POST
  * 
  * app.post('/users', (request, response) => {
  * 
  */
    app.get('/users', (request, response) => {
    // Pegar params do Query Params: const params = request.query;
    // Pegar params do Route Params: const params = request.params;
    // Pegar params do Request Body: const body = request.body;

    return response.json({
        nome: 'Junior',
        idade: '22 anos'
    });
});

app.listen(3333);