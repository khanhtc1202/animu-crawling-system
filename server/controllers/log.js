module.exports = function(config, utils) {
    var spawn = require('child_process').spawn;
    var obj = {};
    
    obj.show = function(req, res, next) {
        res.header('Content-Type','text/html;charset=utf-8');
        var tail = spawn('tail', ['-f', config.app.logPath]);
        res.on('close', function(){
            console.log("Response ended");
            tail.kill("SIGINT");
        }).on('finish', function() {
            console.log("Response finished successfully");
        });
        tail.stdout.pipe(res);
    };
    
    return obj;
};
