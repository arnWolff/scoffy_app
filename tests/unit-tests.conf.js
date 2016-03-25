// Karma configuration
// Generated on Thu Mar 24 2016 11:11:07 GMT+0100 (Paris, Madrid)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../www/app/libs/ionic/js/ionic.bundle.js',
      '../www/app/libs/firebase/firebase.js',
      '../www/app/libs/angularfire/dist/angularfire.min.js',
      '../www/_dev_libs/angular-mocks/angular-mocks.js',
      '../www/app/libs/localForage/localforage.min.js',
      '../www/app/libs/localForage/angular-localForage.js',
      '../www/app/app.module.js',
      '../www/app/app.config.js',
      '../www/app/app.routes.js',
      '../www/app/app.controllers.js',
      '../www/app/app.services.js',
      '../www/app/tabs/login/login.provider.js',
      '../www/app/tabs/networks/networks.provider.js',
      '../www/app/tabs/login/login.controller.js',
      '../www/app/tabs/dashboard/dashboard.controller.js',
      '../www/app/tabs/networks/networks.controller.js',
      '../www/app/tabs/networks/network.detail.controller.js',
      '../www/app/tabs/account/account.controller.js',
      '../www/app/tabs/account/account.provider.js',
      'unit-tests/**/*.js'
    ],


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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
