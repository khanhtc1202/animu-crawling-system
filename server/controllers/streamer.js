module.exports = function(config, utils) {
    var fs = require('fs');
    var obj = {};
    
    obj.showTime = function(req, res, next) {
        var videoPath = config.app.mediaDummyPath;
        fs.readdirSync(config.app.mediaPath).forEach(function(file) {
            if (file === req.params.name) {
                videoPath = config.app.mediaPath + file;
            }
        });
        console.log(videoPath);
        
        var stat = fs.statSync(videoPath);
    	var total = stat.size;
    	if (req.headers['range']) {
    		var range = req.headers.range;
    		var parts = range.replace(/bytes=/, "").split("-");
    		var partialstart = parts[0];
    		var partialend = parts[1];
    
    		var start = parseInt(partialstart, 10);
    		var end = partialend ? parseInt(partialend, 10) : total - 1;
    		var chunksize = (end - start) + 1;
    		console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);
    
    		var file = fs.createReadStream(videoPath, { start: start, end: end });
    		res.writeHead(206, { 'Content-Range': 'bytes ' + start + '-' + end + '/' + total, 'Accept-Ranges': 'bytes', 'Content-Length': chunksize, 'Content-Type': 'video/mp4' });
    		file.pipe(res);
    	} else {
    		console.log('ALL: ' + total);
    		res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
    		fs.createReadStream(videoPath).pipe(res);
    	}
    };
    
    return obj;
};
