const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = (env) => ({
  mode: env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    filename: '[name].[hash].js',
  },
  devtool: env.NODE_ENV === 'development' ? 'eval' : 'hidden-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 3333,
    // compress: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
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
          'style-loader', // 3 этап - загружаем в реакт уже
          'css-loader', // 2 этап - подгружаем css файл обычный
          {
            // 1 этап - postcss плюшки
            loader: 'postcss-loader',
            options: {
              plugins: [
                // require('postcss-import'),
                // require('postcss-for'),
                require('postcss-simple-vars'),
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
      {
        test: /\.(png|jpg|gif|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              name: '[name].[ext]',
              context: '',
              // useRelativePath: true,
              // name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CompressionPlugin({
      // asset: '[path].gz[query]', // error, Compression Plugin Invalid Options
      algorithm: 'gzip',
      test: /\.(jsx|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      test: /\.(jsx|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});
