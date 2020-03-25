const
    connection  = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { 
            title,
            description,
            value
        } = request.body,
            ong_id = request.headers.authorization;
    
        const [id] = await connection('incidents').insert({
            ong_id,
            title,
            description,
            value
        });
    
        return response.json({ id });
    },

    async index(request, response) {
        const ongs = await connection('incidents').select('*');

        return response.json(ongs);
    }
}