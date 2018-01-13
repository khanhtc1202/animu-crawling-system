module.exports = function(config) {
    var fs = require('fs');
    var obj = {};

    obj.loadControllers = function() {
        var ctrls = {};
        var ctrlsPath = config.root + '/controllers';
        fs.readdirSync(ctrlsPath).forEach(function(file) {
            if(file.indexOf('.js') > 0) {
                ctrls[file.replace('.js','')] = require(ctrlsPath + '/' + file);
                console.log('Loaded: ' + file.replace('.js','') + ' controller.');
            }
        })
        return ctrls;
    }

    return obj;
}