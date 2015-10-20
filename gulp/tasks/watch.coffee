#--------------------------------------------------------
# Requirements
#--------------------------------------------------------

gulp      = require 'gulp'
plugins   = require('gulp-load-plugins')()
config    = require "../config.coffee"


#--------------------------------------------------------
# Watch for changes and reload
#--------------------------------------------------------

gulp.task "watch", ->
  gulp.watch "#{config.sourcePath}/#{config.cssDirectory}/**/*.{styl,sass,scss,css}", ["stylesheets"]
  gulp.watch "#{config.sourcePath}/#{config.imagesDirectory}/**/*", ["copy-images"]
  gulp.watch "#{config.sourcePath}/#{config.jsDirectory}/**/*.{coffee,js}", ["javascripts"]
  gulp.watch "#{config.sourcePath}/#{config.hamlDirectory}/**/*.haml", ["haml"]
  gulp.watch "bower.json", ["bower"]

  plugins.livereload.listen()

  gulp.watch "#{config.publicPath}/**/*", (e) ->
    plugins.livereload.changed(e.path)

  return
