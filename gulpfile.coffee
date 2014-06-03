###*
 * Development tasks
 *
 * @author  Christopher Pappas & Matthew Fordham
 * @date    5.30.14
 *
 * Primary Tasks:
 *    gulp dev   : Development mode, file-watcher
 *    gulp build : Minify all sources and deploy for distribution
 *
###

gulp         = require 'gulp'
autoprefixer = require 'gulp-autoprefixer'
bower        = require 'gulp-bower'
browserify   = require 'gulp-browserify'
concat       = require 'gulp-concat'
connect      = require 'gulp-connect'
clean        = require 'gulp-clean'
imagemin     = require 'gulp-imagemin'
livereload   = require 'gulp-livereload'
mocha        = require 'gulp-mocha'
notify       = require 'gulp-notify'
stylus       = require 'gulp-stylus'
rename       = require 'gulp-rename'
stylus       = require 'gulp-stylus'
uglify       = require 'gulp-uglify'




# --------------------------------------------------------
# Path Configurations
# --------------------------------------------------------


basePath = '.'
src      = "#{basePath}/src"
output   = "#{basePath}/public"
dist     = "#{basePath}/dist"
test     = "#{basePath}/test"
vendor   = "#{sources}/vendor"
port     = 3000




#--------------------------------------------------------
# Bower / Vendor Concatenation/Minification
#--------------------------------------------------------


gulp.task "bower", ->
   bowerFiles()
      #.pipe concat("vendor.js")
      .pipe gulp.dest("#{output}/assets/scripts")




# --------------------------------------------------------
# Clean working development directory
# --------------------------------------------------------




#--------------------------------------------------------
# Compile coffeescript files
#--------------------------------------------------------


gulp.task "coffee", ->
   gulp.src "#{src}/js/*.coffee", read: false
      .pipe browserify {transform: ["coffeeify"], extensions: [".coffee"]}
      .pipe rename("app.js")
      .pipe gulp.dest("#{output}/assets/scripts")





# --------------------------------------------------------
# Concatinate Bower Vendor files copied from `grunt bower`
# --------------------------------------------------------


gulp.task 'concat'




#--------------------------------------------------------
# Stylesheets
#--------------------------------------------------------


gulp.task "stylus", ->
   gulp.src "#{src}/css/*.styl"
      .pipe stylus()
      .pipe autoprefixer()
      .pipe gulp.dest("#{output}/assets/styles")





#--------------------------------------------------------
# Watch
#--------------------------------------------------------


gulp.task "watch", ->

  # CSS Compilation
  gulp.watch "#{src}/css/*.styl", ["stylus"]

  # JavaScript Complilation
  gulp.watch "#{src}/js/*.coffee", ["coffee"]

  # Vendor Concatenation/Minification with Bower
  gulp.watch "#{src}/vendor/**", ["bower"]

  # LiveReload
  server = livereload()
  gulp.watch(["#{dist}/**"]).on "change", (file) ->
    server.changed file.path




#--------------------------------------------------------
# Tasks
#--------------------------------------------------------

gulp.task "default", [
   "stylus",
   "coffee",
   "bower",
   "watch"
]





