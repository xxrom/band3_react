const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    // publicPath: '/dist/',
  },

  devtool: 'eval',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 3333,
    // compress: true,
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
        test: /\.(png|jpg|gif)$/,
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
      // { // так тоже работает, но тут нет инлайн картинок тогда
      //   test: /\.(jpe?g|png)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         context: '',
      //         // useRelativePath: true,
      //         // outputPath: 'images',
      //         // publicPath: '',
      //       },
      //     },
      //   ],
      // },
      // {
      //   // нужно для преобразования изображений всех в маленькие
      //   test: /\.(png|jpg|gif)$/,
      //   use: {
      //     loader: 'responsive-loader',
      //     options: {
      //       sizes: [100],
      //       placeholder: true,
      //       placeholderSize: 50,
      //       name: 'imgs/[name]-[width].[ext]',
      //     },
      //   },
      // },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    // new ImageminPlugin({ test: /\.(png|jpg|gif)$/ }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new webpack.HashedModuleIdsPlugin(),
  ],

  // cashing
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
};
