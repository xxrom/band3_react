const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3333,
    compress: true,
  },

  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                // require('postcss-import'),
                // require('postcss-for'),
                // require('postcss-simple-vars'),
                // require('postcss-custom-properties'),
                require('postcss-nested'), // &__test { ... }
                // require('postcss-color-function'),
                require('autoprefixer')({
                  browsers: ['last 2 versions', 'ie > 9'],
                }),
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin(),
  ],

  // cashing
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
