const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

let config = {}

config.entry = {
  imgur: __dirname + '/src/js/imgur.js'
}

config.output = {
  filename: 'js/[name].js',
  path: __dirname + '/dist'
}

config.plugins = [
  new CopyWebpackPlugin([
    { from: __dirname + '/src/manifest.json', to: 'manifest.json' },
    { from: __dirname + '/src/icon.png', to: 'icon_128.png' }
  ]),
]

config.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        { 
          loader: 'babel-loader', 
          options: {
            presets: ['es2015'],
          }
        }
      ]
    }  
  ]
}

config.resolve = {
  extensions: ['.js'],
}

config.devtool = 'source-map'

module.exports = config