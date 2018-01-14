module.exports = function(config, utils) {
    var fs = require('fs');
    var obj = {};
    
    obj.list = function(req, res, next) {
        var mediaFiles = [];
        fs.readdirSync(config.app.mediaPath).forEach(function(file) {
            mediaFiles[mediaFiles.length] = {
                "name": file,
                "url": utils.createUrl('video', file),
                "delete": utils.createUrl('delete', file)
            };
            console.log("Loaded file " + file + " ready to view!");
        });
        res.render('videos', { 'data': mediaFiles });
    };
    
    obj.delete = function(req, res, next) {
        fs.readdirSync(config.app.mediaPath).forEach(function(file) {
            if (file === req.params.name) {
                fs.unlink(config.app.mediaPath + file);
            }
        });
        res.render('deleted');
    };
    
    return obj;
};
