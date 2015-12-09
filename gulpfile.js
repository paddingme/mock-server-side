var gulp = require('gulp'),
    apidoc = require('gulp-api-doc'),
    rsync = require('gulp-rsync'),
    shell = require('gulp-shell');

// api.js 编译成 文档 本地地址 http://localhost:port/doc/
gulp.task('doc', function() {
    return gulp.src('api.js')
        .pipe(apidoc())
        .pipe(gulp.dest('public/doc/'));
});

// 将 doc 文件打包到219
// 访问地址 192.168.0.219/lzx/doc/xgkxk/
gulp.task('push', ['doc'], function() {
    gulp.src('public/doc/**/*')
        .pipe(rsync({
            root: 'public/doc/',
            hostname: '219',
            username: 'root',
            destination: '/opt/vfsroot/lzx/doc/xsczda/',
            progress: true
        }))
})

// gulp 一条命令 生成文档，发布文档，启动服务器。
gulp.task('default', ['push'], shell.task([
    'node server'
]))
