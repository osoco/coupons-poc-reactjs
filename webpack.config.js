const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  test: path.join(__dirname, 'tests')
};

process.env.BABEL_ENV = TARGET;

const extractCSS = new ExtractTextPlugin('[name].[contenthash].css', {
  allChunks: true
});

const scssLoaders = [
  'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
  'resolve-url',
  'sass?sourceMap'
]

const common = {
  // application entry point
  entry: path.join(PATHS.app, 'index.jsx'),
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
      path: path.join(PATHS.build, 'dist'),
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js',
      publicPath: './'
    },
    plugins: [
      new CleanPlugin([PATHS.build]),
      // Setting DefinePlugin reduces React library size
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      extractCSS,
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
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

if(TARGET === 'test' || TARGET === 'tdd') {
  module.exports = merge(common, {
    devtool: 'inline-source-map',
    resolve: {
      alias: {
        'app': PATHS.app
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['isparta-instrumenter'],
          include: PATHS.app
        }
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: PATHS.test
        },
        {
          test: /\.scss$/,
          loaders: ['style?sourceMap'].concat(scssLoaders)
        }
      ]
    }
  });
}