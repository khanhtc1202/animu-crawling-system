module.exports = function(config) {
    var fs = require('fs');
    var obj = {};
    
    obj.createUrl = function(type, resource_name) {
        var baseUrl = config.app.mediaBaseUrl;
        switch (type) {
            case 'video':
                return baseUrl + 'view/video/' + resource_name;
            case 'delete':
                return baseUrl + 'delete/' + resource_name;
            default:
                return baseUrl;
        }
    };
    
    obj.getMediaInfo = function(fileName) {
        return fs.statSync(config.app.mediaPath + fileName);
    };

    return obj;
};