module.exports = function(config, utils) {
    var exec = require('child_process').exec;
    var obj = {};
    
    obj.show = function(req, res, next) {
        res.header('Content-Type','text/html;charset=utf-8');
        var statusScriptPath = config.app.scriptPath + 'status.sh';
        exec(`sh ${statusScriptPath}`, (error, stdout, stderr) => {
          if (error) {
            res.status(200).send(error);
            return;
          }
          res.status(200).send(stdout.replace(/ /g, '---').replace(/\n/g, '</br></br>'));
        });
    };
    
    return obj;
};
