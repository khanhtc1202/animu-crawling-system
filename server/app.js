var config = require('./config');
var express = require('express');
var bootstrap = require('./libs/bootstrap')(config);
var utils = require('./libs/utils')(config);

// Create server object
var app = express();

// Bootstrap
require('./config/express')(app, config);
require('./config/routes')(app, bootstrap, utils);

// Start server
app.listen(config.port, function() {
    console.log('Server running on 127.0.0.1:', config.port);
});