const gulp = require("gulp");
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const watchify = require("watchify");
const tsify = require("tsify");
var gutil = require("gulp-util");
const express = require("express");

const port = (gutil.env.port ? gutil.env.port : 8080);

gulp.task("html", function () {
  return gulp.src("src/index.html")
    .pipe(gulp.dest("./dist"));
});

gulp.task("asset", function () {
  return gulp.src("./asset/**/*")
    .pipe(gulp.dest("./dist/asset"));
});

gulp.task('serve', function() {
  const server = express();
  server.use(express.static('./dist'));
  server.listen(port);
});

const watchedBrowserify = watchify(browserify({
  basedir: '.',
  debug: true,
  entries: ['src/main.ts'],
  cache: {},
  packageCache: {}
}).plugin(tsify));

function bundle() {
  return watchedBrowserify
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("./dist"));
}

gulp.task("default", ["html", "serve", "asset"], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);