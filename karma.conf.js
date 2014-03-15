// Karma configuration
// Generated on Fri Mar 14 2014 15:01:19 GMT-0700 (PDT)

var traceurOptions = require('./config').traceur;

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'requirejs', 'traceur'],

    files: [
      'test-main.js',
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'test/**/*.js', included: false},

      {pattern: 'node_modules/assert/dist/amd/**/*.js', included: false}
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
