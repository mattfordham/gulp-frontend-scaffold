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

# Root application path
basePath = '.'

# Directory where source files live
sources = "#{basePath}/src"

# Path to compile to during development
output =  "#{basePath}/public/static"

# Path to build final deploy files
dist =    "#{basePath}/dist"

# Test specs directory and html
test =    "#{basePath}/test"

# Directory where vendor files live
vendor =  "#{sources}/vendor"

# Browser port during development
port = 3000




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
   gulp.src "#{sources}/scripts/app.coffee", read: false
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




# --------------------------------------------------------
# Copy source files
# --------------------------------------------------------


# Copy development files
gulp.task "copy", ->

   # Copy assets
   gulp.src "#{sources}/assets/**/*.*" #, base: './'
      .pipe gulp.dest "#{output}/assets"

   # Copy html
   gulp.src "#{sources}/html/**/*.*" #, base: './'
      .pipe gulp.dest "#{output}"


# Copy dist files
gulp.task "copy-dist", ->

   # Copy dist
   gulp.src "#{output}" #, base: './'
      .pipe gulp.dest "#{dist}"




#--------------------------------------------------------
# Compile Stylus stylesheet files
#--------------------------------------------------------


gulp.task "stylus", ->
   gulp.src "#{sources}/styles/app.styl"
      .pipe stylus()
      .pipe autoprefixer()
      .pipe gulp.dest "#{output}/assets/styles"




#--------------------------------------------------------
# Watch for changes and reload page
#--------------------------------------------------------


gulp.task "watch", ->

   # CSS
   gulp.watch "#{sources}/styles/**/*.styl", ["stylus"]

   # JavaScript
   gulp.watch "#{sources}/scripts/**/*.coffee", ["browserify"]

   # Vendor
   #gulp.watch "#{sources}/vendor/**", ["concat"]

   # LiveReload
   server = livereload()
   gulp.watch(["#{output}/**"]).on "change", (file) ->
      server.changed file.path



# + ----------------------------------------------------------



gulp.task "default", [
   "clean"
   "copy"
   "bower"
   "browserify"
   "stylus"
   "bower"
   "concat"
   "watch"
]