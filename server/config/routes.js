module.exports = function(app, bootstrap, utils) {

    var ctrls = bootstrap.loadControllers(utils);

    // Say hello to the world
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/videos', ctrls["videos"].list);
    app.get('/view/video/:name', ctrls["streamer"].showTime);
    app.get('/logs', ctrls['log'].show);
    app.get('/monitor', ctrls['monitor'].show);
    app.get('/delete/:name', ctrls['videos'].delete);

    // Catch-all
    app.get('*', function(req, res) { res.status(404).json({ error:'Invalid GET request' }) });
    app.post('*', function(req, res) { res.status(404).json({ error:'Invalid POST request' }) });
    app.delete('*', function(req, res) { res.status(404).json({ error:'Invalid DELETE request' }) });
};
