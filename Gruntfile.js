/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      server : {
        files : ['server.js'],
        tasks: ['runNode'],
        options: {
          interrupt: true
        }
      }
    }
  });

grunt.registerTask('runNode', function () {
  grunt.util.spawn({
    cmd: 'node',
    args: ['server.js'],
    opts: {
      stdio: 'inherit'
    }
  }, function () {
    grunt.fail.fatal(new Error("nodemon quit"));
  });
});


  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.registerTask('default', ['runNode', 'watch:server']);
};
