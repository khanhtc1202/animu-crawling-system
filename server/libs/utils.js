module.exports = function(config) {
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

    return obj;
};