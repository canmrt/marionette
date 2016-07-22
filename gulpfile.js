var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    server = require('browser-sync').create();

var config = {
  index : 'index.html',
  entry : 'src/app.js',
  input : 'src',
  output: 'bin',
  webpackConfig: './webpack.config.js'
}

gulp.task('webpack', function() {
  return gulp.src(config.entry)
    .pipe(webpack(require(config.webpackConfig)))
    .pipe(gulp.dest(config.output));
});

gulp.task('copy-html', function() {
  return gulp.src(config.index)
    .pipe(gulp.dest(config.output));
});

gulp.task('default', ['copy-html', 'webpack', 'watch'], function() {
  server.init({
    server: {
      baseDir: config.output
    }
  });
});

gulp.task('watch', ()=>{
  gulp.watch(config.input + '/*', ['webpack']);
  gulp.watch(config.index, ['copy-html']);
  gulp.watch(config.output + '/*').on('change', server.reload);
});
