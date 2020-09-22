var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function (done) {
    gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));

    done();
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

gulp.task('auto', function () {
    return gulp.src('css/style.css')
        .pipe(autoprefixer({
            // browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});