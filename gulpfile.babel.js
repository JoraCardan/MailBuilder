import critical from 'critical';
import babelify from 'babelify';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import source from 'vinyl-source-stream';


/* ----------------- */
/* Development
/* ----------------- */

gulp.task('development', ['scripts', 'styles'], () => {
    browserSync({
        'server': './app/',
        'snippetOptions': {
            'rule': {
                'match': /<\/body>/i,
                'fn': (snippet) => snippet
            }
        }
    });

    gulp.watch('./app/scss/**/*.scss', ['styles']);
    gulp.watch('./app/js/**/*.js', ['scripts']);
    gulp.watch('./*.html', browserSync.reload);
});


/* ----------------- */
/* Scripts
/* ----------------- */

gulp.task('scripts', () => {
    return browserify({
        'entries': ['./app/js/index.js'],
        'debug': true,
        'transform': [
            babelify.configure({
                'presets': ['es2015']
            })
        ]
    })
    .bundle()
    .on('error', function () {
        var args = Array.prototype.slice.call(arguments);

        plugins().notify.onError({
            'title': 'Compile Error',
            'message': '<%= error.message %>'
        }).apply(this, args);

        this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(plugins().sourcemaps.init({'loadMaps': true}))
    .pipe(plugins().sourcemaps.write('.'))
    .pipe(gulp.dest('./app/build/js/'))
    .pipe(browserSync.stream());
});


/* ----------------- */
/* Styles
/* ----------------- */

gulp.task('styles', () => {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(plugins().sourcemaps.init())
        .pipe(plugins().sass().on('error', plugins().sass.logError))
        .pipe(plugins().sourcemaps.write())
        .pipe(gulp.dest('./app/build/css/'))
        .pipe(browserSync.stream());
});


/* ----------------- */
/* HTML
/* ----------------- */

gulp.task('html', ['cssmin'], () => {
    return gulp.src('./app/index.html')
        .pipe(critical.stream({
            'base': 'app/build/',
            'inline': true,
            'extract': true,
            'minify': true,
            'css': ['./app/build/css/style.css']
        }))
        .pipe(gulp.dest('build'));
});


/* ----------------- */
/* Cssmin
/* ----------------- */

gulp.task('cssmin', () => {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(plugins().sass({
            'outputStyle': 'compressed'
        }).on('error', plugins().sass.logError))
        .pipe(gulp.dest('./app/build/css/'));
});


/* ----------------- */
/* Jsmin
/* ----------------- */

gulp.task('jsmin', () => {
    var envs = plugins().env.set({
        'NODE_ENV': 'production'
    });

    return browserify({
        'entries': ['./app/js/index.js'],
        'debug': false,
        'transform': [
            babelify.configure({
                'presets': ['es2015']
            })
        ]
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(envs)
    .pipe(buffer())
    .pipe(plugins().uglify())
    .pipe(envs.reset)
    .pipe(gulp.dest('./app/build/js/'));
});

/* ----------------- */
/* Taks
/* ----------------- */

gulp.task('default', ['development']);
gulp.task('deploy', ['html', 'jsmin']);
