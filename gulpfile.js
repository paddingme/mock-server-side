var gulp = require('gulp'),
    apidoc = require('gulp-api-doc');
 
gulp.task('doc', function() {
    return gulp.src('api.js')
        .pipe(apidoc())
        .pipe(gulp.dest('public/doc/'));
});