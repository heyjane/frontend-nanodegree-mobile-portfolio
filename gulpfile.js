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


//include plug-ins
var minifyHTML = require('gulp-minify-html');

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
	var htmlSrc = './src/*.html',
	    htmlDst = './build';

gulp.src(htmlSrc)
	.pipe(changed(htmlDst))
	.pipe(minifyHTML())
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

//Push to gh-pages
var ghPages = require('gulp-gh-pages');
	gulp.task('deploy', function() {
		return gulp.src('./build/**/*')
		.pipe(ghPages());
	});

//default gulp task
gulp.task('default', ['imagemin', 'htmlpage', 'scripts'], function() {

});