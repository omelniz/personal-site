module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({

        // Sass (начало)
        sass: {
            dev: {
                files: {
                    'css/screen.css': 'sass/screen.scss'
                },
                options: {
                    style: 'expanded',
                    trace: true,
                    sourceMap: false
                }
            }
        },
        // Sass (конец)

        // Css (начало)
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css'],
                dest: 'distr/',
                ext: '.min.css'
            }
        },
        // Css (конец)

        // Autoprefixer (начало)
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            },
            devScreenFile: {
                src:  'css/screen.css',
                dest: 'css/screen.css'
            }
        },
        // Autoprefixer (конец)

        // Watch (начало)
        watch: {
            options: {
                livereload: 1337,
            },
            sass: {
                files: ['sass/**/*.sass', 'sass/**/*.scss'],
                tasks: ['sass:dev', 'autoprefixer:devScreenFile']
            },
            html: {
                files: ['./**/*.html']
            }
        },
        // Watch (конец)

        connect: {
            test: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['sass:dev', 'autoprefixer:devScreenFile', 'cssmin:minify']);
    grunt.registerTask('dev', ['connect', 'watch']);
};
