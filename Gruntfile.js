//wraper function for Grunt config
module.exports = function(grunt) {
//load plugin
//initialize config project
  grunt.initConfig({
    //read the project settings
    pkg: grunt.file.readJSON('package.json')
    //jshint plugin
    jshint: {
      //define the files to lint
      files: ['gruntfile.js', 'server.js', 'test/**/*.js'],
      options: {
        //options to override jshint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
        }
      }
    },
    //Watch the plugin
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }

  });
  //load plugin files needed
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //Set up tasks
  //run by typing "grunt test" on the command line
  grunt.registerTask('test', ['jshint']);
  //run by typing "gurnt" on the command line
  grunt.registerTask('default', ['jshint']);
};
