var gulp = require('gulp'), 
	ignore = require('gulp-ignore'),
	jasmine = require('gulp-jasmine'),
	minifyCSS = require('gulp-minify-css'),
	react = require('gulp-react'),
	rename = require('gulp-rename'),
	rimraf = require('gulp-rimraf'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	util = require('gulp-util'),
	watch = require('gulp-watch')
	webpack = require('gulp-webpack');
	webpack_config = require('./webpack.config')

gulp.task('default', ['build']);
gulp.task('build', ['html', 'img', 'sass', 'react', 'webpack', 'watch']);
gulp.task('unbuild', ['clean']);

// Remove dist directory
gulp.task('clean', function(){
	gulp.src('./dist/')
	.pipe(rimraf());
});

// Copy html files to dist directory
gulp.task('html', function(){
	gulp.src('./src/*.html')
	.pipe(gulp.dest('./dist/'));
});

// Copy images to dist directory
gulp.task('img', function(){
	gulp.src('./src/img/**/*')
	.pipe(gulp.dest('./dist/img/'));
});

// Compile and copy sass files to dist directory
gulp.task('sass', function(){
	gulp.src('./src/sass/**/*')
	.pipe(sass())
	.pipe(minifyCSS())
	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('react', function(){

});

gulp.task('webpack', function(){
	gulp.src('./src/js/main.js')
	.pipe(webpack(webpack_config))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js/'));
});

// Watch for changes
gulp.task('watch', function(){

});

// Run test scripts
gulp.task('test', function(){

});