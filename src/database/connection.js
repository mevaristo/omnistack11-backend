const 
    knex    = require('knex'),
    config  = require('../../knexfile');

const connection = knex(config.development);

module.exports = connection;