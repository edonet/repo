'use strict';

const
    appServer = require('../index')(__dirname);

appServer
    .get('/get', (req, res) => res.send({ method: 'get' }))
    .route('./user')
    .listen();
