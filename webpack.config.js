const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
  // style: path.join(__dirname, 'app/main.css')
};

const extractCSS = new ExtractTextPlugin('styles/[name].[contenthash].css', {
    allChunks: true
  });

const scssLoaders = [
    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
    'resolve-url',
    'sass?sourceMap'
  ]

const common = {
  // entry: [path.join(PATHS.app, 'main.jsx'), PATHS.style],
  // modules loaded on startup
  entry: path.join(PATHS.app, 'main.jsx'),
  module: {
    loaders: [
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  }
};

if(TARGET === 'build') {
  module.exports = merge(common, {
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    plugins: [
      new CleanPlugin([PATHS.build]),
      // Setting DefinePlugin affects React library size!
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      extractCSS
    ],
    module: {
      loaders: [
        {
          // When building, styles are extracted to a file per chunk
          test: /\.scss$/,
          loader: extractCSS.extract(scssLoaders)
        }
      ]
    }
  });
}
else {
  module.exports = merge(common, {
    module: {
      loaders: [
        {
          // During development styles are bundled in modules
          test: /\.scss$/,
          loaders: ['style?sourceMap'].concat(scssLoaders)
        }
      ]
    }
  });
}