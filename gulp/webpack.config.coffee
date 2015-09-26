webpack = require('webpack')
config  = require './config'

#--------------------------------------------------------
# Development Config
#--------------------------------------------------------

module.exports =
  cache: true
  entry: require './webpack.entries'
  output:
    path: "#{__dirname}/../#{config.outputPath}/#{config.jsDirectory}"
    filename: '[name].js'
  
  externals:
      "jquery": "jQuery"
      "$": "jQuery"

  module: loaders: [ 
    {
      test: /\.coffee$/
      loader: 'coffee-loader'
    }
  ]
  resolve:
    modulesDirectories: [
      'node_modules'
      'bower_components'
    ]
    extensions: [
      ''
      '.js'
      '.coffee'
      '.html'
    ]
   