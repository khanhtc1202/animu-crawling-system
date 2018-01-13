module.exports = function(config, utils) {
    var fs = require('fs');
    var obj = {};
    
    obj.list = function(req, res, next) {
        var mediaFiles = [];
        fs.readdirSync(config.app.mediaPath).forEach(function(file) {
            mediaFiles[mediaFiles.length] = {
                "name": file,
                "url": utils.createUrl('video', file)
            };
            console.log("Loaded file " + file + " ready to view!");
        });
        res.render('videos', { 'data': mediaFiles });
    };
    
    return obj;
};
