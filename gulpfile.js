const gulp = require('gulp');
const eslint = require('gulp-eslint');
const { spawn } = require('child_process');

const paths = {
  allSrcJs: 'src/**/*.js',
  gulpFile: 'gulpfile.js',
  srcDir: 'src',
  executable: 'src/quiver2jekyll'
};

let server;

// clear the terminal
gulp.task('clear', (callback) => {
  process.stdout.write('\u001B[2J\u001B[0;0f');
  callback();
});

// check the code is well structured
gulp.task('lint', () => {
  return gulp.src([
    paths.allSrcJs,
    paths.gulpFile
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

// run node
gulp.task('main', ['lint'], () => {
  // kill the server if it's running
  if (server) {
    server.kill();
    server = undefined;
  }

  // spawn a new node process
  server = spawn('node', [`${paths.executable}`]);
  server.stdout.on('data', (data) => console.log(data.toString()));
  server.stderr.on('data', (data) => console.log(data.toString()));
});

// watch files to restart the server
gulp.task('watch', () => {
  gulp.watch([
    paths.allSrcJs,
    paths.gulpFile
  ], ['clear', 'main']);
});

gulp.task('default', ['clear', 'watch', 'main']);
