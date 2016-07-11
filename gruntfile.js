module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            dist: {
                files: {
                    'build/js/main.js': ['scripts/main.js', 'blocks/**/*.js']
                },
                options: {
                    transform: [
                        ['babelify', {
                            presets: ['es2015'],
                        }]
                    ],
                    browserifyOptions: {
                        debug: true,
                    },
                },
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'build/css/main.css': ['styles/main.sass']
                }
            }
        },

        less: {
            dist: {
                files: {
                    'build/css/main.css': ['styles/main.less'],
                }
            }
        },

        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: {
                    'build/index.html': ['views/index.jade']
                }
            }
        },

        concat: {
            options: {
                //separator: ';',
            },
            dist: {
                src: ['scripts/global.js', 'blocks/**/*.js'],
                dest: 'build/js/main,js',
            },
        },

        uglify: {
            options: {
                manage: false
            },
            uglify: {
                files: [{
                    'build/js/main.min.js': ['build/js/main.js']
                }]
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*/*.{png,jpg,gif}'],
                    dest: 'img/minified/'
                }]
            }
        },

        cssmin: {
            minify: {
                files: [{
                    expand: true,
                    cwd: 'build/css/',
                    src: '*.css',
                    dest: 'build/css',
                    ext: '.min.css'
                }]
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 6 versions']
                    })
                ]
            },
            dist: {
                src: 'build/css/*.css',
                ext: '.css'
            }
        },

        copy: {
            libs: {
                expand: true,
                cwd: './',
                src: [
                    './node_modules/jquery/dist/jquery.min.js',
                    './node_modules/bootstrap/dist/css/bootstrap.min.css'
                ],
                dest: 'build/libs/',
                flatten: true,
                filter: 'isFile',
            },
            fonts: {
                expand: true,
                cwd: './fonts/',
                src: ['./*', './**/*'],
                dest: './build/fonts/',
                flatten: true,
                filter: 'isFile',
            },
            imgs: {
                expand: true,
                cwd: './',
                src: ['./img/*'],
                dest: './build/img/',
                flatten: true,
                filter: 'isFile',
            }
        },

        watch: {
            grunt: {
                files: ['gruntfile.js']
            },
            jade: {
                files: [
                    'views/*.jade',
                    'blocks/**/*.jade',
                    'img/svg/*.svg'
                ],
                tasks: ['jade']
            },
            sass: {
                files: ['styles/*.sass', 'styles/modules/*.sass', 'blocks/**/*.sass'],
                tasks: ['sass', 'postcss']
            },
            less: {
                files: ['styles/*.less', 'styles/modules/*.less', 'blocks/**/*.less'],
                tasks: ['less', 'postcss']
            },
            js: {
                files: ['scripts/main.js', 'blocks/**/*.js'],
                tasks: ['browserify']
            }
        },

        'gh-pages': {
            options: {
                base: 'build'
            },
            src: ['./index.html', './css/**', './fonts/**', './img/**', './js/**', './libs/**']
        },
    });

    grunt.registerTask('compile', ['copy', 'jade', 'sass', 'browserify', 'postcss']);
    grunt.registerTask('minimize', ['uglify', 'cssmin']);
    grunt.registerTask('default', ['compile', 'watch']);
    grunt.task.run('notify_hooks');
};
