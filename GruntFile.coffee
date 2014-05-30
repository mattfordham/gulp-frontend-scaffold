###*
 * Development tasks
 *
 * @author  Christopher Pappas
 * @date    2.3.14
 *
 * Primary Tasks:
 *    grunt dev   : Development mode, file-watcher
 *    grunt build : Minify all sources and deploy for distribution
 *
###

"use strict"


handleify = require 'handleify'
coffeeify = require 'coffeeify'
uglifyify = require 'uglifyify'


module.exports = (grunt) ->


   # Root application path
   basePath = '.'

   # Directory where source files live
   sources  = "#{basePath}/src"

   # Directory where vendor files live
   vendor   = "#{sources}/vendor"

   # Path to compile to during development
   output   = "#{basePath}/public"

   # Path to build final deploy files
   dist     = "#{basePath}/dist"

   # Test specs directory and html
   test     = "#{basePath}/test"

   # Browser port during development
   port     = 3000




   grunt.initConfig


      # --------------------------------------------------------
      # Automatically prefix vendor-related CSS properties
      # --------------------------------------------------------


      'autoprefixer':

         dev:
            src:  "<%= sass.dev.files[0].dest %>"
            dest: "<%= sass.dev.files[0].dest %>"

         dist:
            src:  "<%= sass.dist.files[0].dest %>"
            dest: "<%= sass.dist.files[0].dest %>"



      # --------------------------------------------------------
      # Copy Bower sources to vendor directory for concat
      # --------------------------------------------------------


      'bower':

         vendor:
            dest: "#{vendor}"




      # --------------------------------------------------------
      # Compile JavaScript using Browserify
      # --------------------------------------------------------


      'browserify':

         dev:
            src: ["#{sources}/scripts/app.coffee"]
            dest: "#{output}/assets/scripts/app.js"

            options:
               transform: [handleify, coffeeify]
               debug: true

         test:
            src: ["#{test}/spec-runner.coffee"]
            dest: "#{test}/html/spec/spec-runner.js"

            options:
               transform: "<%= browserify.dev.options.transform %>"
               debug: "<%= browserify.dev.options.debug %>"

         dist:
            src: "<%= browserify.dev.src %>"
            dest: "<%= browserify.dev.dest %>"

            options:
               transform: [handleify, coffeeify, uglifyify]
               debug: false




      # --------------------------------------------------------
      # Concatinate Bower Vendor files copied from `grunt bower`
      # --------------------------------------------------------


      'concat':

         options:
            separator: ';'

         vendor:
            src: [
               "#{vendor}/jquery.js"
               "#{vendor}/lodash.js"
               "#{vendor}/backbone.js"
               "#{vendor}/greensock.js"
            ]

            dest: "#{output}/assets/scripts/vendor.js"




      # --------------------------------------------------------
      # Create server @ localhost:port and ip:port
      # --------------------------------------------------------


      'connect':

         dev:
            options:
               hostname: null
               port: "#{port}"
               base: "#{output}"
               livereload: true




      # --------------------------------------------------------
      # Copy assets {images|sound|etc} to output directory
      # --------------------------------------------------------


      'copy':

         assets:
            files: [{
               expand: true
               cwd: "#{sources}/assets"
               src: ['**']
               dest: "#{output}/assets"
            }]

         html:
            files: [{
               expand: true
               cwd: "#{sources}/html"
               src: ['**']
               dest: "#{output}"
            }]

         dist:
            files: [{
               expand: true
               cwd: "#{output}"
               src:['**']
               dest: "#{dist}"
            }]




      # --------------------------------------------------------
      # Clean working development directory
      # --------------------------------------------------------


      'clean':

         dev:
            files: [{
               expand: true
               cwd: "#{output}"
               src: ['**']
            }]

         dist:
            files: [{
               expand: true
               cwd: "#{dist}"
               src: ['**']
            }]




      # --------------------------------------------------------
      # Optimize images using ImageMin
      # --------------------------------------------------------


      'imagemin':

         dist:
            options:
               pngquant: true
               optimizationLevel: 5

            files: [{
               expand: true
               cwd: "#{output}/assets/images/"
               src: ['**/*.{png,jpg,gif}']
               dest: "#{output}/assets/images/"
            }]




      # --------------------------------------------------------
      # Mocha tests via PhantomJS or the browser
      # --------------------------------------------------------


      'mocha':

         test:
            options:
               reporter: 'Spec'
               run: true
               require: 'coffee-script'

            mocha:
               ignoreLeaks: true

            src: ["#{test}/**/*.html"]




      # --------------------------------------------------------
      # Compile SASS source files
      # --------------------------------------------------------


      'sass':

         dev:
            options:
               style: "expanded"
               sourcemap: true

            files: [{
               src: ["#{sources}/styles/main.scss"]
               dest: "#{output}/assets/styles/app.css"
            }]

         dist:
            options:
               style: "compressed"
               sourcemap: false

            files: [{
               src: "#{sources}/styles/main.scss"
               dest: "#{output}/assets/styles/app.css"
            }]




      # --------------------------------------------------------
      # Watch files for changes and trigger appropriate tasks
      # --------------------------------------------------------


      'watch':

         options:
            livereload: true
            spawn: false

         assets:
            files: "#{sources}/assets/**/*.*"
            tasks: ['copy:assets']

         html:
            files: "#{sources}/html/**/*.*"
            tasks: ['copy:html']

         scripts:
            files: "#{sources}/scripts/**/*.{js,coffee,hbs}"
            tasks: ['browserify:dev']

         styles:
            files: "#{sources}/styles/**/*.{scss,sass}"
            tasks: ['sass:dev', 'autoprefixer:dev']

         test:
           files: [ 'test/**/*.*' ]
           tasks: [ 'test' ]

         vendor:
            files: "#{vendor}/**/*.js"
            tasks: ['concat:vendor']




      # --------------------------------------------------------
      # Uglify vendor file
      # --------------------------------------------------------


      'uglify':

         source:
            src: "#{output}/assets/scripts/app.js"
            dest: "#{output}/assets/scripts/app.js"

         vendor:
            src: "#{output}/assets/scripts/vendor.js"
            dest: "#{output}/assets/scripts/vendor.js"



   # + ----------------------------------------------------------



   grunt.registerTask 'dev', [
      'clean:dev'
      'copy:assets'
      'copy:html'
      'browserify:dev'
      'sass:dev'
      'autoprefixer:dev'
      'bower:vendor'
      'concat:vendor'
      'test'
      'connect'
      'watch'
   ]


   grunt.registerTask 'build', [
      'clean:dev'
      'clean:dist'
      'copy:assets'
      'copy:html'
      'browserify:dist'
      'sass:dist'
      'autoprefixer:dist'
      'bower:vendor'
      'concat:vendor'
      'uglify'
      'imagemin'
      'copy:dist'
      'clean:dev'
   ]


   grunt.registerTask 'test', [
      'browserify:dev'
      'browserify:test'
      'concat:vendor'
      'mocha'
   ]


   grunt.registerTask 'default', ['dev']


   # + ----------------------------------------------------------


   # Load grunt dependencies based upon package.json
   require('load-grunt-tasks')(grunt)

   # Print stack traces on error
   grunt.option 'stack', true

   # Continue running grunt on error
   grunt.option 'force', true


