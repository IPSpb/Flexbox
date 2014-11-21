var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch("js/*.js", ['bs-reload']);
    gulp.watch("*.css", ['bs-reload']);
    gulp.watch("*.html", ['bs-reload']);
});
