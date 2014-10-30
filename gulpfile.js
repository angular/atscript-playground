var gulp = require('gulp');
var traceur = require('gulp-traceur');
var connect = require('gulp-connect');
var rename = require('gulp-rename');

var TRACEUR_OPTIONS = require('./config').traceur;
var PATH = {
  SRC: './src/**/*.ats'
};


// TRANSPILE AT SCRIPT
gulp.task('build', function() {
  gulp.src(PATH.SRC)
      .pipe(traceur(TRACEUR_OPTIONS))
      .pipe(rename({extname: '.js'}))
      .pipe(gulp.dest('build/src'));
});


// WATCH FILES FOR CHANGES
gulp.task('watch', function() {
  gulp.watch(PATH.SRC, ['build']);
});


// WEB SERVER
gulp.task('serve', function() {
  connect.server({
    root: [__dirname],
    port: 8000,
    livereload: false
  });
});


gulp.task('default', ['serve', 'watch']);
