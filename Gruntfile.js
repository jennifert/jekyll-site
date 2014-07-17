module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin : {
            css:{
                src: 'css/main.css',
                dest: 'css/main.min.css'
            }
        },
        uglify : {
            js: {
                files: {
                    'js/main.min.js' : [ 'js/main.js' ]
                }
            }
        },
        concat: {
            css: {
                src: ['css/bootstrap.min.css', 'css/font-awesome.min.css', 'css/main.min.css'],
                dest: 'css/combined.css'
            },
            js: {
                src: ['js/jquery-1.11.1.min.js','js/bootstrap.min.js', 'js/main.min.js'],
                dest: 'js/combined.js'
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'dist/*.html': '_site/*.html',     // 'destination': 'source'
                'dist/blog/*.html': '_site/blog/*.html',
                'dist/about/*.html': '_site/about/*.html'
              }
            }
          },
        watch: {
            files: ['css/*', 'js/*'],
            tasks: ['cssmin', 'uglify','concat']
        }
    });
    
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', [ 'cssmin:css', 'uglify:js','concat:css', 'concat:js','htmlmin' ]);
};