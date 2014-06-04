###*
 * Development tasks
 *
 * @author  Christopher Pappas & Matthew Fordham
 * @date    6.4.14
 *
 * Primary Tasks:
 *    gulp dev   : Development mode, file-watcher
 *    gulp build : Minify all sources and deploy for distribution
 *
###

gulp         = require 'gulp'
autoprefixer = require 'gulp-autoprefixer'
bowerFiles   = require 'gulp-bower-files'
browserify   = require 'gulp-browserify'
coffeeify    = require 'coffeeify'
concat       = require 'gulp-concat'
connect      = require 'gulp-connect'
clean        = require 'gulp-clean'
imagemin     = require 'gulp-imagemin'
livereload   = require 'gulp-livereload'
mocha        = require 'gulp-mocha'
notify       = require 'gulp-notify'
rename       = require 'gulp-rename'
stylus       = require 'gulp-stylus'
uglify       = require 'gulp-uglify'




# --------------------------------------------------------
# Path Configurations
# --------------------------------------------------------


basePath = '.'
src      = "#{basePath}/src"
output   = "#{basePath}/public/static"
dist     = "#{basePath}/dist"
test     = "#{basePath}/test"
vendor   = "#{src}/vendor"
port     = 3000




#--------------------------------------------------------
# Copy Bower libraries to vendor directory
#--------------------------------------------------------


gulp.task "bower", ->
   bowerFiles()
      .pipe gulp.dest "#{vendor}"




#--------------------------------------------------------
# Compile scripts using Browserify
#--------------------------------------------------------


gulp.task "browserify", ->
   gulp.src "#{src}/scripts/app.coffee", read: false
      .pipe browserify
         transform:  ["coffeeify"]
         extensions: [".coffee", ".js"]

      .pipe rename "app.js"
      .pipe gulp.dest "#{output}/assets/scripts"




# --------------------------------------------------------
# Clean working development directory
# --------------------------------------------------------


gulp.task "clean", ->
   gulp.src "#{output}/assets", read: false
      .pipe clean()




# --------------------------------------------------------
# Concatinate vendor files
# --------------------------------------------------------


gulp.task "concat", ->

   vendorFiles = [
      "lodash/dist/lodash.compat.js"
      "jquery/jquery.js"
      "backbone/backbone.js"
      "greensock/src/uncompressed/TweenMax.js"

   ].map (file) -> "#{vendor}/" + file

   gulp.src vendorFiles
      .pipe concat "vendor.js"
      .pipe gulp.dest "#{output}/assets/scripts/"



#--------------------------------------------------------
# Compile Stylus stylesheet files
#--------------------------------------------------------


gulp.task "stylus", ->
   gulp.src "#{src}/styles/app.styl"
      .pipe stylus()
      .pipe autoprefixer()
      .pipe gulp.dest "#{output}/assets/styles"




#--------------------------------------------------------
# Watch for changes and reload page
#--------------------------------------------------------


gulp.task "watch", ->

  # CSS
  gulp.watch "#{src}/styles/**/*.styl", ["stylus"]

  # JavaScript
  gulp.watch "#{src}/scripts/**/*.coffee", ["browserify"]

  # Vendor
  #gulp.watch "#{src}/vendor/**", ["concat"]

  # LiveReload
  server = livereload()
  gulp.watch(["#{output}/**"]).on "change", (file) ->
    server.changed file.path



# + ----------------------------------------------------------



gulp.task "default", [
   "clean"
   "bower"
   "browserify"
   "stylus"
   "watch"
]

