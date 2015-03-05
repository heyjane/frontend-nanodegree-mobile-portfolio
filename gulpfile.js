//include gulp
var gulp = require('gulp');

//include plug-ins
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');

//JShint task
gulp.task('jshint', function() {
	gulp.src('./js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

//minify new images

gulp.task('imagemin', function() {
	var imgSrc = './src/img/**/*',
		imgDst = './build/img';

gulp.src(imgSrc)
	.pipe(changed(imgDst))
	.pipe(imagemin())
	.pipe(gulp.dest(imgDst));
});

//Convert images to WebP
var webp = require('gulp-webp');

gulp.task('webp', function() {
	var imgSrc = './src/img/**/*',
		imgDst = './build/img';

gulp.src(imgSrc)
	.pipe(changed(imgDst))
	.pipe(webp())
	.pipe(gulp.dest(imgDst));
});



//include plug-ins
var minifyHTML = require('gulp-minify-html');
var inlineCSS = require('gulp-inline-css');

// minify new or changed HTML pages and inline CSS
gulp.task('htmlpage', function() {
	var htmlSrc = './src/*.html',
	    htmlDst = './build';

gulp.src(htmlSrc)
	.pipe(changed(htmlDst))
	.pipe(minifyHTML())
	.pipe(inlineCSS())
	.pipe(gulp.dest(htmlDst));

});

//include plug-ins
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

//JS concat, strip debugging and minify
gulp.task('scripts', function() {
	gulp.src(['./src/js/lib.js', './src/js/*.js'])
		.pipe(concat('script.js'))
		.pipe(stripDebug())
		.pipe(uglify())
		.pipe(gulp.dest('./build/js/'));
});

//include plug-ins
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

//CSS concat, auto-prefix and minify
gulp.task('styles', function() {
	gulp.src(['./src/css/*.css'])
		.pipe(concat('styles.css'))
		.pipe(autoprefix('last 2 versions'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./build/css/'));
});



//default gulp task
gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles', 'webp'], function() {
	/*
	//watch for HTML changes
	gulp.watch('./src/*.html', function() {
		gulp.run('htmlpage');
	});

	//watch for JS changes
	gulp.watch('./src/js/*.js', function() {
		gulp.run('jshint', 'scripts');
	});

	//watch for CSS changes
	gulp.watch('./src/css/*.css', function() {
		gulp.run('styles');
	});
	*/
});


