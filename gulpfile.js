var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    stylus      = require('gulp-stylus'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    jeet        = require('jeet'),
    rupture     = require('rupture'),
    prefixer    = require('autoprefixer-stylus'),
    imagemin    = require('gulp-imagemin'),
    cp          = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Monta o site do Jekyll
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Refaz o site e atualiza a página
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Espera até que o jekyll-build seja executado e então levanta o
 * servidor utilizando o _site como pasta raiz
 */

gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('stylus', function(){
        gulp.src('src/styl/main.styl')
        .pipe(plumber())
        .pipe(stylus({
            use:[prefixer(), jeet(),rupture()],
            compress: true
        }))
        .pipe(gulp.dest('_site/assets/css/'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'))
});


gulp.task('js', function(){
    return gulp.src('src/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'))
});


gulp.task('imagemin', function() {
    return gulp.src('src/img/**/*')
        .pipe(plumber())
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('assets/img/'));
});

gulp.task('watch', function () {
    gulp.watch('src/styl/**/*.styl', ['stylus']);
    gulp.watch('src/js/**/*.js', ['js']);
     gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
    gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['js', 'stylus', 'imagemin', 'browser-sync', 'watch']);
