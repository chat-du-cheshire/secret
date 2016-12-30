'use strict';
const gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function(){
    connect.server({
        root: 'build/'
    });
})

gulp.task("default", ['connect']);


