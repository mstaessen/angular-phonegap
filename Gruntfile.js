'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        src: 'src',
        dist: 'dist'
    };

    try {
        yeomanConfig.src = require('./component.json').appPath || yeomanConfig.src;
    } catch (e) {
    }

    grunt.initConfig({
        yeoman: yeomanConfig,
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '!<%= yeoman.dist %>/*',
                            '!<%= yeoman.dist %>/bower.json',
                            '!<%= yeoman.dist %>/.git*'
                        ]
                    }
                ]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.src %>/{,*/}*.js'
            ]
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        concat: {
            options: {
                process: function (src, filepath) {
                    return '// Source: ' + filepath + '\n' +
                        src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            },
            dist: {
                files: {
                    '<%= yeoman.dist %>/angular-phonegap.js': [
                        '<%= yeoman.src %>/PhoneGap.js',
                        '<%= yeoman.src %>/plugins/*.js'
                    ]
                }
            }
        },
        ngmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.dist %>',
                        src: '*.js',
                        dest: '<%= yeoman.dist %>'
                    }
                ]
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/angular-phonegap.min.js': '<%= yeoman.dist %>/angular-phonegap.js'
                }
            }
        }
    });

    grunt.registerTask('test', [
        'clean:server',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'jshint',
//        'test',
        'concat',
        'ngmin',
        'uglify'
    ]);

    grunt.registerTask('default', ['build']);
};
