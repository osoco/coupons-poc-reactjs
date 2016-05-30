// Reference: http://karma-runner.github.io/0.13/config/configuration-file.html

var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {}; // Note: this is required, otherwise Karma uses a cached version of the test even if it has been changed.

module.exports = function karmaConfig (config) {
    config.set({
        frameworks: [
            // Reference: https://github.com/karma-runner/karma-mocha
            // Set framework to mocha
            'mocha', 'chai'
        ],
        reporters: [
            // Reference: https://github.com/mlex/karma-spec-reporter
            // Set reporter to print detailed results to console
            'spec',
            // Reference: https://github.com/karma-runner/karma-coverage
            // Output code coverage files
            'coverage'
        ],
        files: [
            // Reference: https://www.npmjs.com/package/phantomjs-polyfill
            // Needed because React.js requires bind and phantomjs does not support it
            'node_modules/phantomjs-polyfill/bind-polyfill.js',
            // Grab all files in the tests directory that contain _test.
            'app/**/*_test.*'
        ],
        preprocessors: {
            // Reference: http://webpack.github.io/docs/testing.html
            // Reference: https://github.com/webpack/karma-webpack
            // Convert files with webpack and load sourcemaps
            'app/**/*_test.*': ['webpack', 'sourcemap']
        },
        browsers: [
            // Run tests using PhantomJS
            'PhantomJS'
        ],
        singleRun: true,
        // Configure code coverage reporter
        coverageReporter: {
            dir: 'build/coverage/',
            type: 'html'
        },
        // Test webpack config
        webpack: webpackConfig,
        // Hide webpack build information from output
        webpackMiddleware: {
            noInfo: true
        }
    });
};