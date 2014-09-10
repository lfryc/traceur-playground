var gulp = require('gulp');
var traceur = require('gulp-traceur');
var livereload = require('gulp-livereload');

var paths = {
  scripts: ['src/**.js']
};

gulp.task('default', ['traceur']);

gulp.task('traceur', function () {
  return gulp.src(paths.scripts)
    .pipe(traceur({sourceMaps: true, modules: 'amd', experimental: true}))
    .pipe(gulp.dest('dist'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.scripts, ['traceur']).on('change', livereload.changed);
});