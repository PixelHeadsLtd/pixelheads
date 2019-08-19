const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// run 'npm start' and in another window run 'gulp watch'
// kill all ports 'Get-Process node | Stop-Process'

// compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./src/scss/**/*.scss')
    // 2. pass that file through the sass compiler
    .pipe(sass())
    // 3. where do i save the compiled css?
    .pipe(gulp.dest('./src/css'))
    // 4. stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/**/*.js').on('change', browserSync.reload);
    //gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
    //gulp.watch('./src/components/**/*.js').on('change', browserSync.reload);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
    gulp.watch('./public/*.html').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;