// Karma configuration
// Generated on Fri Mar 14 2014 15:01:19 GMT-0700 (PDT)

var traceurOptions = require('./config').traceur;

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'requirejs', 'traceur'],

    files: [
      // The entry point that dynamically imports all the specs.
      {pattern: 'main_test.js', included: true},

      // All the specs and sources are included dynamically from `test/main.js`.
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'test/**/*.js', included: false},

      // The runtime assertion library.
      {pattern: 'node_modules/rtts-assert/dist/amd/assert.js', included: false}
    ],

    preprocessors: {
      'src/**/*.js': ['traceur'],
      'test/**/*.js': ['traceur']
    },

    browsers: ['Chrome'],

    traceurPreprocessor: {
      options: traceurOptions
    }
  });
};
