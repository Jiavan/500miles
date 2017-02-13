var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('./source/less/**.less')
        .pipe(less())
        .pipe(gulp.dest('./source/css'));
});

gulp.task('watch', function() {
    gulp.watch('./source/less/**.less', ['less']);
});
