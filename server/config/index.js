var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    port = 3000;

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'home-media-server',
            mediaPath: '/workspace/media-server/media',
            mediaBaseUrl: 'http://fromnoobstogeeks.com:7001/'
        },
        port: port
    },

    production: {
        root: rootPath,
        app: {
            name: 'home-media-server',
            mediaPath: '/workspace/media-server/media',
            mediaBaseUrl: 'http://fromnoobstogeeks.com:7001/'
        },
        port: port
    }
};

module.exports = config[env];
