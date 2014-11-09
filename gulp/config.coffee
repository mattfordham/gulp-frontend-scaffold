#--------------------------------------------------------
# Config Variables
#--------------------------------------------------------

Config = -> 

  # Development mode
  @development = false

  # Source path
  @sourcePath = "source"

  # Compile path
  @outputPath = "public/assets"

  # Public directory
  @publicPath = "public"

  # Test path
  @testPath = "test"

  # Directory where vendor files live
  @vendorPath = "#{@sourcePath}/vendor"

  # Name of JavaScript directory
  @jsDirectory = "js"

  # Name of CSS directory
  @cssDirectory = "css"

  # Name of Images directory
  @imagesDirectory = "images"

  # Name of SVG directory
  @svgDirectory = "svg"

  # Name of Fonts directory
  @fontsDirectory = "fonts"

  # Name of main JS file
  @jsMainFile = "main"

  # Name of main CSS file
  @cssMainFile = "main"


module.exports = new Config()