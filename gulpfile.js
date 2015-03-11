//include gulp plug-ins
var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

//JShint task
gulp.task('jshint', function() {
	gulp.src('./src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('viewjshint', function() {
	gulp.src('./src/views/js/*.js')
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


gulp.task('viewimagemin', function() {
	var imgSrc = './src/views/img/**/*',
		imgDst = './build/views/img';

gulp.src(imgSrc)
	.pipe(changed(imgDst))
	.pipe(imagemin())
	.pipe(gulp.dest(imgDst));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
	var htmlSrc = './src/*.html',
	    htmlDst = './build';

gulp.src(htmlSrc)
	.pipe(changed(htmlDst))
	.pipe(minifyHTML())
	.pipe(gulp.dest(htmlDst));

});

gulp.task('viewhtmlpage', function() {
	var htmlSrc = './src/views/*.html',
	    htmlDst = './build/views';

gulp.src(htmlSrc)
	.pipe(changed(htmlDst))
	.pipe(minifyHTML())
	.pipe(gulp.dest(htmlDst));

});

//JS minify
gulp.task('scripts', function() {
	var jsSrc = './src/js/*.js',
		jsDst = './build/js/';

	gulp.src(jsSrc)
		.pipe(uglify())
		.pipe(gulp.dest(jsDst));
});

gulp.task('viewscripts', function() {
	var jsSrc = './src/views/js/*.js',
		jsDst = './build/views/js/';

	gulp.src(jsSrc)
		.pipe(uglify())
		.pipe(gulp.dest(jsDst));
});

//default gulp task
gulp.task('default', ['imagemin', 'viewimagemin', 'htmlpage', 'viewhtmlpage', 'scripts', 'viewscripts', ], function() {

});