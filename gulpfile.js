'use strict';
const gulp = require('gulp'),
    connect = require('gulp-connect'),
    beautify = require('gulp-html-beautify'),
    prettify = require('gulp-html-prettify');;

gulp.task('connect', function(){
    connect.server({
        root: 'build/'
    });
});

gulp.task('beauty', function(){
    return gulp.src(['./raw/**/*.html'])
            .pipe(beautify({preserve_newlines: false}))
            .pipe(gulp.dest('./build/'))
});

gulp.task('cp_all', function(){
    return gulp.src(['./raw/**/*', '!./raw/**/*.html'])
            .pipe(gulp.dest('./build/'))
});

gulp.task('pretty', function(){
    return gulp.src(['./raw/**/*.html'])
            .pipe(prettify({indent_char: ' ', indent_size: 4}))
            .pipe(beautify({preserve_newlines: false}))
            .pipe(gulp.dest('./pretty/'));
});

gulp.task('beautify', ['beauty', 'cp_all']);

gulp.task("default", ['connect']);


