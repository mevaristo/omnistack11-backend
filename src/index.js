const 
    express = require('express'),
    routes  = require('./routes'),
    cors    = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
