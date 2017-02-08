'use strict';

/*
 *************************************
 * 引入依赖模块
 *************************************
 */
const
    path = require('path'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    sassOptions = { outputStyle: 'compressed' },
    postcssOptions = require('../postcss.config.js'),
    src = process.argv[3].replace('--entry=', '');


/*
 *************************************
 * 创建打包任务
 *************************************
 */
gulp.task('default', () => {

    // 输出日志
    console.log('==> Sass: ', src);

    // 执行任务
    return gulp.src(src)
        .pipe(sass(sassOptions))
        .pipe(postcss(postcssOptions.plugins))
        .pipe(gulp.dest(path.dirname(src)));
});

