#--------------------------------------------------------
# Requirements
#--------------------------------------------------------

gulp      = require 'gulp'
plugins   = require('gulp-load-plugins')()
config    = require "../config.coffee"


#--------------------------------------------------------
# Template compilation
#--------------------------------------------------------

gulp.task "templates", (callback) ->
  gulp.src "#{config.sourcePath}/#{config.templateDirectory}/**/*.jade"
    .pipe plugins.consolidate("jade")
    .pipe(plugins.rename((path) ->
      path.extname = ".html"
    ))
    .pipe gulp.dest "#{config.publicPath}"

