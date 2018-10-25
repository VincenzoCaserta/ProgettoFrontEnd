module.exports = function(grunt) {

  grunt.initConfig({
    serve: {
        options: {
            port: 9000
        }
    },
    browserify: {
      dist: {
        files: {
          'src/js/bundle.js':'src/js/application.js'
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'dist/css/style.min.css': ['src/css/style.css']
        }
      }
    },
    uglify: {
    my_target: {
      files: {
        'dist/js/bundle.min.js': ['src/js/bundle-es5.js']
      }
    }
  },
  babel: {
    options: {
      presets: ['env']
    },
    dist: {
            files: {
              'src/js/bundle-es5.js':'src/js/bundle.js'
            }
          }
  },
  watch: {
    scripts: {
      files: 'src/js/application.js',
      tasks: ['browserify'],
    }
  },
});

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.task.registerTask('develop', ['browserify','watch']);
  grunt.task.registerTask('build', ['cssmin','browserify', 'babel','uglify','serve']);


};
