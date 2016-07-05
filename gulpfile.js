var gulp = require('gulp'),
    webpack = require('webpack-stream');

var config = {
  entry : 'src/app.js',
  output: 'bin/',
  webpackConfig: './webpack.config.js'
}

gulp.task('default', function() {
  return gulp.src(config.entry)
    .pipe(webpack(require(config.webpackConfig)))
    .pipe(gulp.dest(config.output));
});