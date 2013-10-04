
// Karma configuration
module.exports = function(config) {
    config.set({
        frameworks: ['ng-scenario'],

        files: [
            'test/e2e/*.js'
        ],

        basePath: '../..',

        autoWatch: true,

        proxies: {
            '/': 'http://localhost:3000/'
        },

        urlRoot: '__karma__',

        browsers: ['Chrome'],

        reporters: ['dots'],

        plugins: [
            'karma-ng-scenario',
            'karma-chrome-launcher'
        ]
    });
};
