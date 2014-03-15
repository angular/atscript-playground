var gulp = require('gulp');
var traceur = require('gulp-traceur');
var traceurOptions = require('./config').traceur;
var connect = require('gulp-connect');


var path = {
  src: './src/**/*.js'
};


// TRANSPILE ES6
gulp.task('build', function() {
  gulp.src(path.src)
      .pipe(traceur(traceurOptions))
      .pipe(gulp.dest('compiled/src'));
});


// WATCH FILES FOR CHANGES
gulp.task('watch', function() {
  gulp.watch(path.src, ['build']);
});


// WEB SERVER
gulp.task('serve', connect.server({
  root: [__dirname],
  port: 8000,
  open: true,
  livereload: false
}));
