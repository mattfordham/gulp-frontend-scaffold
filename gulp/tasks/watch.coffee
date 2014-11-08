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

  plugins.watch "#{config.sourcePath}/#{config.cssDirectory}/**/*.{styl,sass,scss,css}", (e, cb) ->
    gulp.start "stylesheets", cb

  plugins.watch "#{config.sourcePath}/#{config.imagesDirectory}/**/*", (e, cb) ->
    gulp.start "copy-images", cb

  plugins.watch "#{config.sourcePath}/#{config.jsDirectory}/**/*.{coffee,js}", (e, cb) ->
    gulp.start "javascripts", cb

  plugins.watch "#{config.sourcePath}/#{config.vendorPath}/**/*", (e, cb) ->
    gulp.start "bower", cb

  server = plugins.livereload()
  plugins.livereload.listen()

  plugins.watch "#{config.publicPath}/**/*.{css,js,svg,jpg,gif,png}"
    .pipe plugins.livereload()

  plugins.watch "#{config.publicPath}/**/*.html", (e, cb) ->
    server.changed()
    cb()

  return