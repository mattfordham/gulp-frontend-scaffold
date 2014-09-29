#--------------------------------------------------------
# Config Variables
#--------------------------------------------------------

module.exports = 

  # Root application path
  basePath: '.'

  # Source path
  sourcePath: "#{@basePath}/source"

  # Compile path
  outputPath: "#{@basePath}/public/assets"

  # Public directory
  publicPath: "#{@basePath}/public"

  # Test path
  testPath: "#{@basePath}/test"

  # Directory where vendor files live
  vendorPath: "#{@sourcePath}/vendor"

  # Name of JavaScript directory
  jsDirectory: "js"

  # Name of CSS directory
  cssDirectory: "css"

  # Name of Images directory
  imagesDirectory: "images"

  # Name of SVG directory
  svgDirectory: "svg"

  # Name of Fonts directory
  fontsDirectory: "fonts"

  # Name of main JS file
  jsMainFile: "main"

  # Name of main CSS file
  cssMainFile: "main"