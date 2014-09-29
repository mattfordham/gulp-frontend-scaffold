#--------------------------------------------------------
# Requirements
#--------------------------------------------------------

gulp      = require 'gulp'
plugins   = require('gulp-load-plugins')()
config    = require "../config.coffee"


#--------------------------------------------------------
# Minify 
#--------------------------------------------------------

gulp.task "minify", ->

  # Compress images
  gulp.src "#{config.outputPath}/#{config.imagesDirectory}/*"
    .pipe plugins.imagemin
      optimizationLevel: 5
    .pipe gulp.dest "#{config.outputPath}/#{config.imagesDirectory}"

  # Compress Main JavaScript
  gulp.src "#{config.outputPath}/#{config.jsDirectory}/#{config.jsMainFile}.js"
    .pipe plugins.uglify()
    .pipe gulp.dest "#{config.outputPath}/#{config.jsDirectory}/"

  # Compress Vendor JavaScript
  gulp.src "#{config.outputPath}/#{config.jsDirectory}/vendor.js"
    .pipe plugins.uglify()
    .pipe gulp.dest "#{config.outputPath}/#{config.jsDirectory}/"

  # Minify CSS and Combine MediaQueries
  gulp.src "#{config.outputPath}/#{config.cssDirectory}/*.css"
    .pipe plugins.combineMediaQueries()
    .pipe plugins.minifyCss()
    .pipe gulp.dest "#{config.outputPath}/#{config.cssDirectory}"