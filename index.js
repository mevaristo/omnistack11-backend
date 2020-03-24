/**
 * INFO:
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: /route?param1=value1&param2=value2&...&paramn=valuen
 *      Filtros, paginação
 * 
 *      const params = request.query; 
 *      Retorna um objeto js com os params:
 *      {
 *          param1: value1,
 *          param2: value2,
 *          ...,
 *          paramn: valuen
 *      }
 *
 * Route Params: /route/:param (exemplo de chamada= /route/584)
 *      Identificar recursos
 *      const params = request.params; 
 *      Retorna um objeto js com o param:
 *      {
 *          param: 584
 *      }
 * 
 * Request Body:
 *      Corpo da requisição, usado para criar ou alterar recursos 
 *      (por exemplo, em um método POST)
 *  
 *      Exemplo de requisição: /route
 *      O body pode ser um JSON: api.use(express.json());
 *      {
 *          "name": "name1",
 *          "age": "age1"
 *      }
 *      
 *      const params = request.body;
 *      
 */

const express = require('express');

const api = express();

api.get('/', (request, response) => {
    return response.json( {
        cause: "end world disease",
        dummy: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
            "sed do eiusmod tempor incididunt ut labore et dolore magna ",
            "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
            "ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "Duis aute irure dolor in reprehenderit in voluptate velit ",
            "esse cillum dolore eu fugiat nulla pariatur. Excepteur ",
            "sint occaecat cupidatat non proident, sunt in culpa qui ",
            "officia deserunt mollit anim id est laborum."
        ]
    } );
});

api.listen(3333)