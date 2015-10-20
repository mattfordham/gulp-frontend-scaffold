#--------------------------------------------------------
# Requirements
#--------------------------------------------------------

gulp      = require 'gulp'
plugins   = require('gulp-load-plugins')()
config    = require "../config.coffee"


#--------------------------------------------------------
# Haml compilation
#--------------------------------------------------------

gulp.task "haml", (callback) ->
  console.log "#{config.sourcePath}/#{config.hamlDirectory}/**/*.haml"
  gulp.src "#{config.sourcePath}/#{config.hamlDirectory}/**/*.haml"
    .pipe plugins.haml()
    .pipe gulp.dest "#{config.publicPath}"

