var gulp      = require('gulp'); // import the gulp module itself

//css
var useref    = require('gulp-useref');
var minifyCss = require('gulp-minify-css');
var gulpif    = require('gulp-if');

//js
var wiredep = require('wiredep').stream;
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

//browserify
// var browserify = require('browserify');

gulp.task('css-files', function () {
    var stream = gulp.src('index.html')
        .pipe(useref()) //take a streem from index.html comment
        .pipe(gulpif('*.css', minifyCss())) // if .css file, minify
        .pipe(gulpif('*.css', gulp.dest('./build'))); // copy to dist
    return stream;
});

gulp.task('copy-html-files', function () {
    var stream =  gulp.src('*.html') // stream source
        .pipe(gulp.dest('./build/')); // copy to dist/views
    return stream;
});


gulp.task('bower-files', function () {
    var stream = gulp.src('index.html')
        .pipe(wiredep({
            directory: 'bower_components' //inject dependencies
        }))
        .pipe(useref())
        .pipe(gulpif('*.js', ngAnnotate())) // ng-annotate if .js
        .pipe(gulpif('*.js', uglify())) // uglify if .js
        .pipe(gulpif('*.js', gulp.dest('./build'))); // paste to dist
    return stream;
});

// gulp.task('build-js', ['clean'], function() {  
//     var b = browserify({
//         entries: 'app.js',
//         debug: true,
//         paths: ['scripts/controllers', 'scripts/services', 'scripts/directives'],
//         transform: [ngAnnotate]
//     });
 
//     return b.bundle()
//         .pipe(source('bundle.js'))
//         // .pipe(buffer())
//         // .pipe(cachebust.resources())
//         // .pipe(sourcemaps.init({loadMaps: true}))
//         .pipe(uglify())
//         .on('error', gutil.log)
//         // .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('./dist/scripts/'));
// });


gulp.task('main_js', function() {
	// gulp.src([
	// 	'app.js',
	// 	'scripts/services/utilService.js',
	// 	'scripts/services/ngProgressbarService.js',
	// 	'scripts/directives/wuHeader.js',
	// 	'scripts/directives/wuPagination.js',

	// 	'scripts/controllers/homeController.js',
	// 	'scripts/controllers/recipeController.js',
	// 	'scripts/controllers/recipeDetailsController.js'
	// 	])
	// 	// .pipe(plumber())
	// 	// .pipe(concat('main.js'))
	// 	.pipe(uglify())
	// 	// .pipe(size())
	// 	.pipe(gulp.dest('build/js'));



		 var stream = gulp.src('index.html')
        // .pipe(wiredep({
        //     directory: 'bower_components' //inject dependencies
        // }))
        .pipe(useref())
        .pipe(gulpif('*.js', ngAnnotate())) // ng-annotate if .js
        .pipe(gulpif('*.js', uglify())) // uglify if .js
        .pipe(gulpif('*.js', gulp.dest('./build/js'))); // paste to dist
    return stream;
});

gulp.task('build', ['copy-html-files', 'css-files', 'bower-files', 'main_js']);
