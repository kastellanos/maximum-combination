// Karma configuration
// Generated on Wed Apr 05 2017 12:04:28 GMT-0500 (COT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm','jasmine'],


    // list of files / patterns to load in the browser
    files: [
        './node_modules/angular/angular.js',
        './node_modules/angular-mocks/angular-mocks.js',
        'app/condig.js',
        'app/src/app.js',
        'app/src/AppController.js',
        'app/src/maximumCombination/services/NumbersDataService.js',
        'app/src/maximumCombination/components/list/NumbersList.js',
        'app/src/maximumCombination/components/actions/ShowResult.js',
        'app/src/maximumCombination/components/actions/ReadNumbers.js',
        'app/src/maximumCombination/components/util/TextCard.js',
        'app/src/maximumCombination/maximumCombination.js',
        'app/src/tests/actions.spec.js'
    ],

     jspm: {
         config: 'app/config.js',
         loadFiles: ['app/src/app.js', 'app/src/**/*.spec.js'],
         serveFiles: ['test/helpers/**/*.js','src/app/**/*.+(js|html|css|json)']
      },
    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
