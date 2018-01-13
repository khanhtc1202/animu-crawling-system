var config = require('../config');
var fs = require('fs');

var videos = {
    list : function(req, res, next) {
        var mediaFiles = [];
        fs.readdirSync(config.app.mediaPath).forEach(function(file) {
            mediaFiles[mediaFiles.length] = {
                "name": file,
                "path": config.app.mediaPath + '/' + file
            };
            console.log("Loaded file " + file + " ready to view!");
        });
        res.render('videos', {'data':mediaFiles});
    }
};

module.exports = videos;