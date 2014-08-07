#########################################################
# WINTR Gulp Config
# Author: matt@wintr.us @ WINTR
#########################################################

#--------------------------------------------------------
# Requirements
#--------------------------------------------------------

gulp        = require 'gulp'
coffeeify   = require 'coffeeify'
handleify   = require 'handleify'
runSequence = require 'run-sequence'
eventStream = require 'event-stream'
plugins     = require('gulp-load-plugins')()


#--------------------------------------------------------
# Variables
#--------------------------------------------------------

# Root application path
basePath = '.'

# Source path
sourcePath = "#{basePath}/source"

# Compile path
outputPath = "#{basePath}/public/assets"

# Public directory
publicPath = "#{basePath}/public"

# Test path
testPath = "#{basePath}/test"

# Directory where vendor files live
vendorPath = "#{sourcePath}/vendor"

# Name of JavaScript directory
jsDirectory = "js"

# Name of CSS directory
cssDirectory = "css"

# Name of Images directory
imagesDirectory = "images"

# Name of SVG directory
svgDirectory = "svg"

# Name of Fonts directory
fontsDirectory = "fonts"

# Name of main JS file
jsMainFile = "main"

# Name of main CSS file
cssMainFile = "main"


# --------------------------------------------------------
# Run server
# --------------------------------------------------------

gulp.task "server", ->
   plugins.connect.server
      host: null
      port: 3000
      root: publicPath


#--------------------------------------------------------
# Compile Stylesheets
#--------------------------------------------------------

gulp.task "stylesheets", ->
  
  gulp.src ["#{sourcePath}/#{cssDirectory}/#{cssMainFile}.styl"]
    .pipe plugins.plumber()
    .pipe plugins.stylus()
    .pipe plugins.autoprefixer()
    .pipe gulp.dest "#{outputPath}/#{cssDirectory}"

  gulp.src ["#{sourcePath}/#{cssDirectory}/ie.styl"]
    .pipe plugins.plumber()
    .pipe plugins.stylus()
    .pipe plugins.autoprefixer()
    .pipe gulp.dest "#{outputPath}/#{cssDirectory}"


#--------------------------------------------------------
# Compile JavaScripts 
#--------------------------------------------------------

gulp.task "javascripts", ->
  gulp.src "#{sourcePath}/#{jsDirectory}/#{jsMainFile}.coffee", read: false
    .pipe plugins.plumber()
    .pipe plugins.browserify
      transform:  ["handleify", "coffeeify"]
      extensions: [".coffee", ".js"]
      debug: true
    .pipe plugins.rename "#{jsMainFile}.js"
    .pipe gulp.dest "#{outputPath}/#{jsDirectory}"


#--------------------------------------------------------
# Concatenate Bower libraries
#--------------------------------------------------------

gulp.task "bower", ->
  plugins.bowerFiles()
    .pipe plugins.concat("vendor.js")
    .pipe gulp.dest "#{outputPath}/#{jsDirectory}"


# --------------------------------------------------------
# Clean output directories
# --------------------------------------------------------

gulp.task "clean", ->
  
  directoriesToClean = [
    "#{outputPath}/#{jsDirectory}"
    "#{outputPath}/#{cssDirectory}"
    "#{outputPath}/#{imagesDirectory}"
  ]

  gulp.src directoriesToClean, read: false
    .pipe plugins.clean()


#--------------------------------------------------------
# Copy images
#--------------------------------------------------------

gulp.task "copy-images", ->
  gulp.src "#{sourcePath}/#{imagesDirectory}/**/*"
    .pipe gulp.dest "#{outputPath}/#{imagesDirectory}"


#--------------------------------------------------------
# Minify 
#--------------------------------------------------------

gulp.task "minify", ->

  # Compress images
  gulp.src "#{outputPath}/#{imagesDirectory}/*"
    .pipe plugins.imagemin
      optimizationLevel: 5
    .pipe gulp.dest "#{outputPath}/#{imagesDirectory}"

  # Compress Main JavaScript
  gulp.src "#{outputPath}/#{jsDirectory}/#{jsMainFile}.js"
    .pipe plugins.uglify()
    .pipe gulp.dest "#{outputPath}/#{jsDirectory}/"

  # Compress Vendor JavaScript
  gulp.src "#{outputPath}/#{jsDirectory}/vendor.js"
    .pipe plugins.uglify()
    .pipe gulp.dest "#{outputPath}/#{jsDirectory}/"

  # Minify CSS and Combine MediaQueries
  gulp.src "#{outputPath}/#{cssDirectory}/*.css"
    .pipe plugins.combineMediaQueries()
    .pipe plugins.minifyCss()
    .pipe gulp.dest "#{outputPath}/#{cssDirectory}"


#--------------------------------------------------------
# Watch for changes and reload
#--------------------------------------------------------

gulp.task "watch", ->

  plugins.watch glob: "#{sourcePath}/#{cssDirectory}/**/*.{styl,sass,scss,css}", ->
    gulp.start "stylesheets"

  plugins.watch glob: "#{sourcePath}/#{imagesDirectory}/**/*", ->
    gulp.start "copy-images"

  plugins.watch glob: "#{sourcePath}/#{jsDirectory}/**/*.{coffee,js}", ->
    gulp.start "javascripts"

  plugins.watch glob: "#{sourcePath}/#{vendorPath}/**/*", ->
    gulp.start "bower"

  # LiveReload
  server = plugins.livereload()
  gulp.watch(["#{publicPath}/**/*"]).on "change", (file) ->
    server.changed file.path


#--------------------------------------------------------
# Lint
#--------------------------------------------------------
    
gulp.task "lint", ->
  
  gulp.src "#{sourcePath}/#{jsDirectory}/**/*.coffee"
    .pipe plugins.coffeelint()
    .pipe plugins.coffeelint.reporter()
  
  gulp.src "#{outputPath}/#{cssDirectory}/#{cssMainFile}.css"
    .pipe plugins.csslint()
    .pipe plugins.csslint.reporter()
  
  gulp.src("#{publicPath}/**/*.html")
    .pipe(plugins.htmlhint("id-class-value": "dash"))
    .pipe plugins.htmlhint.reporter()


#--------------------------------------------------------
# Icon Font
#--------------------------------------------------------
    
gulp.task "icon-font", ->
  
  cssTemplateFilename = "icon-font-template.css"
  cssOutputFilename = "_icons.styl"
  fontName = "icons"
  fontPath = "../fonts/"
  className = "icon"

  # Grab SVGs from Sketch. 
  # Requires Sketch Tools http://sketchtool.bohemiancoding.com/sketchtool-latest.zip
  sketchSvgStream = gulp.src "#{sourcePath}/#{svgDirectory}/*.sketch"
    .pipe plugins.sketch
      export: 'artboards'
      formats: 'svg'

  # Grab SVGs from 'svg' directory
  fileSvgStream = gulp.src "#{sourcePath}/#{svgDirectory}/*.svg"

  # Merge svg streams together
  allSvgStream = eventStream.merge sketchSvgStream, fileSvgStream

  # Generate Font and CSS from all SVGs
  allSvgStream
    .pipe(plugins.iconfont
      fontName: "icons"
      normalize: true
    ).on("codepoints", (codepoints, options) ->
      gulp.src "#{sourcePath}/#{svgDirectory}/#{cssTemplateFilename}"
        .pipe(plugins.consolidate "lodash",
          glyphs: codepoints
          fontName: fontName
          fontPath: fontPath
          className: className
        ).pipe plugins.rename cssOutputFilename
        .pipe gulp.dest "#{sourcePath}/#{cssDirectory}"
    ).pipe gulp.dest "#{outputPath}/#{fontsDirectory}"


#--------------------------------------------------------
# Tests
#--------------------------------------------------------

gulp.task "test", ->
  gulp.start "javascripts"
  
  gulp.src "#{testPath}/spec-runner.coffee", read: false
    .pipe plugins.plumber()
    .pipe plugins.browserify
      transform:  ["handleify", "coffeeify"]
      extensions: [".coffee", ".js"]
      debug: true
    .pipe plugins.rename "spec.js"
    .pipe gulp.dest "#{testPath}/html"

  gulp.src "#{testPath}/html/index.html"
    .pipe plugins.mochaPhantomjs()

  
    
#---------------------------------------------------------

gulp.task "default", ["dev"]

gulp.task "dev", ->
  runSequence "clean", [
    "copy-images"
    "bower"
    "javascripts"
    "stylesheets"
  ], "server", "watch"

gulp.task "build", ->
  runSequence "clean", [
    "copy-images"
    "bower"
    "javascripts"
    "stylesheets"
  ], "minify"
