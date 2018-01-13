var bodyParser = require('body-parser');

module.exports = function(app, config) {
    
    // Set middle ware app
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.engine('html', require('ejs').renderFile);

    // Set app var
    app.set('views', config.root+'/views');
    app.set('view engine', 'html');

};