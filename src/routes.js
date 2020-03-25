const 
    express             = require('express'),
    OngController       = require('./controllers/OngController'),
    IncidentController  = require('./controllers/IncidentController'),
    ProfileController   = require('./controllers/ProfileController'),
    SessionController   = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

module.exports = routes;