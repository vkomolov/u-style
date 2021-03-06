'use strict';

module.exports = {
    build: {
        html: './build/',
        js: './build/js/',
        style: './build/css/',
        img: './build/assets/img/',
        php: './build/php/'
    },
    src: {
        html: './src/*.html',
        js: './src/js/*.js',
        style: './src/scss/*.scss',
        img: './src/assets/img/**/*',
        php: './src/php/*.php'
    },
    watch: {
        html: './src/*.html',
        js: './src/js/*.js',
        style: './src/scss/**/*.scss',
        img: './src/assets/img/**/*',
        php: './src/php/**/*.php'
    },
    clean: {
        html: './build/*.html',
        style: './build/css/',
        js: './build/js/',
        img: './build/assets/img/*',
        php: './build/php/*'
    }
};