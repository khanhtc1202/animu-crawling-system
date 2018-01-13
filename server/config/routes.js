module.exports = function(app, utils) {

    var ctrls = utils.loadControllers();

    // Say hello to the world
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/videos', ctrls["videos"].list);

    // Catch-all
    app.get('*', function(req, res) { res.status(404).json({ error:'Invalid GET request' }) });
    app.post('*', function(req, res) { res.status(404).json({ error:'Invalid POST request' }) });
    app.delete('*', function(req, res) { res.status(404).json({ error:'Invalid DELETE request' }) });
}