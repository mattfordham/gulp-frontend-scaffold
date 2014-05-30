###*
 * Development tasks
 *
 * @author  Christopher Pappas
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
sources  = "#{basePath}/src"
vendor   = "#{sources}/vendor"
output   = "#{basePath}/public"
dist     = "#{basePath}/dist"
test     = "#{basePath}/test"
port     = 3000


gulp.task 'clean', ->
