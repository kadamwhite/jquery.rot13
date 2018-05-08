/*global module:false*/
module.exports = function(grunt) {

  // Load all tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= pkg.homepage ? "* " + pkg.homepage : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= pkg.licenses.map(function(license) { return license.type; }).join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['src/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      files: '<%= jshint.all %>',
      tasks: [
        'jshint',
        'qunit',
        'concat',
        'uglify'
      ]
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['src/**/*.js', 'test/**/*.js']
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: ['<%= concat.dist.dest %>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    }
  });

  // Register tasks
  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('dev', [
    'build',
    'watch'
  ]);

  grunt.registerTask('build', [
    'jshint',
    'qunit',
    'concat',
    'uglify'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'qunit'
  ]);

};
