module.exports = function(config, utils) {
    var fs = require('fs');
    var path = require('path');
    var obj = {};
    
    obj.list = function(req, res, next) {
        var mediaFiles = [];
        fs.readdirSync(config.app.mediaPath).forEach(function(file) {
            if (config.app.mediaTypes.indexOf(path.extname(file)) > -1) {
                var fileInfo = utils.getMediaInfo(file);
                mediaFiles[mediaFiles.length] = {
                    "index": mediaFiles.length + 1,
                    "name": file,
                    "size": (fileInfo.size / 1048576).toFixed(3) + " MB",
                    "created_at": fileInfo.birthtime,
                    "delete": utils.createUrl('delete', file)
                };
                console.log("Loaded file " + file + " ready to view!");
            }
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
