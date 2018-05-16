// Karma configuration
// Generated on Mon May 14 2018 16:30:53 CEST

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karmaadapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'js/_test/jquery2.2.4.min.js',
      'js/common.js',
      'js/session.js',
      'js/backend.js',
      'js/view.js',
      'js/button/button.js',
      'js/exercises.js',
      'js/_test/*.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karmapreprocessor
    preprocessors: {
      'js/common.js': ['coverage'],
      'js/session.js': ['coverage'],
      'js/backend.js': ['coverage'],
      'js/view.js': ['coverage'],
      'js/button/button.js': ['coverage'],
      'js/exercises.js': ['coverage'],
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : '_coverage/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karmareporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karmalauncher
    browsers: ['Chrome','Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
