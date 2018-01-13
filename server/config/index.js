var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    port = 3000;

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'home-media-server',
            mediaPath: '/workspace/media-server/media'
        },
        port: port,
    },

    production: {
        root: rootPath,
        app: {
            name: 'home-media-server',
            mediaPath: '/workspace/media-server/media'
        },
        port: port,
    }
};

module.exports = config[env];
