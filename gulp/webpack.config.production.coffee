webpack = require('webpack')
config  = require './config'

#--------------------------------------------------------
# Production Config
#--------------------------------------------------------

module.exports =
  cache: true
  entry: require './webpack.entries'
  output:
    path: "#{__dirname}/../#{config.outputPath}/#{config.jsDirectory}"
    filename: '[name].js'

  plugins: [
    new (webpack.DefinePlugin)('process.env': NODE_ENV: JSON.stringify('production'))
    new (webpack.optimize.DedupePlugin)
    new webpack.optimize.UglifyJsPlugin({
      compress: 
        warnings: false
    })
  ]

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