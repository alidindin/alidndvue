// webpack.config.js
let copyWebpackPlugin = require('copy-webpack-plugin'),
  webpack = require('webpack'),
  path = require('path');

module.exports = {
  // the main entry of our app
  entry: './src/main.js',
  // output configuration
  output: {
    path: __dirname + '/build/',
    publicPath: "/build/",
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@frontend': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader",
          {
            loader: 'css-loader',
            options: {importLoaders: 1}
          },
          "postcss-loader"]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader"},
      {test: /\.(woff|woff2)$/, use: "url-loader?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/octet-stream"},
      {test: /\.json$/, use: 'json-loader'},

      // process *.js files using babel-loader
      // the exclude pattern is important so that we don't
      // apply babel transform to all the dependencies!
      // process *.vue files using vue-loader
      {
        test: /\.vue$/,
        //exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader', {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // Specifying webp here will create a WEBP version of your JPG/PNG images
              /*webp: {
                                quality: 75
                            }*/
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // ================== ENABLE OR DISABLE DEBUG MODE =======================
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
