#--------------------------------------------------------
# Requirements
#--------------------------------------------------------

gulp    = require 'gulp'
plugins = require('gulp-load-plugins')()
config  = require "../config.coffee"

#--------------------------------------------------------
# Compile Stylesheets
#--------------------------------------------------------

gulp.task "stylesheets", ->
  
  gulp.src ["#{config.sourcePath}/#{config.cssDirectory}/#{config.cssMainFile}.styl"]
    .pipe plugins.plumber()
    .pipe plugins.stylus()
    .pipe plugins.autoprefixer()
    .pipe gulp.dest "#{config.outputPath}/#{config.cssDirectory}"

  gulp.src ["#{config.sourcePath}/#{config.cssDirectory}/ie.styl"]
    .pipe plugins.plumber()
    .pipe plugins.stylus()
    .pipe plugins.autoprefixer()
    .pipe gulp.dest "#{config.outputPath}/#{config.cssDirectory}"