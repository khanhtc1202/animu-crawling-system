var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    port = 3000;

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'home-media-server',
            mediaPath: rootPath + '/../media/',
            mediaDummyPath: rootPath + '/../dummy_files/nope.mp4',
            logPath: rootPath + '/../logs/run.log',
            scriptPath: rootPath + '/../scripts/',
            mediaBaseUrl: 'http://fromnoobstogeeks.com:7001/',
            mediaTypes: ['.mp4', '.mkv']
        },
        port: port
    },

    production: {
        root: rootPath,
        app: {
            name: 'home-media-server',
            mediaPath: rootPath + '/../media/',
            mediaDummyPath: rootPath + '/../dummy_files/nope.mp4',
            logPath: rootPath + '/../logs/run.log',
            scriptPath: rootPath + '/../scripts/',
            mediaBaseUrl: 'http://fromnoobstogeeks.com:7001/',
            mediaTypes: ['.mp4', '.mkv']
        },
        port: port
    }
};

module.exports = config[env];
