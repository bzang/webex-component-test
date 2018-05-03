var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './button.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  resolve: {
    mainFields: ['src', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, './'),
          path.resolve(__dirname, 'node_modules','@ciscospark')
        ],
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              camelCase: true,
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
              importLoaders: 1,
              sourceMap: true
            }
          }]
        })
      },
      {
        test: /\.woff$/,
        // Inline small woff files and output them below font/.
        // Set mimetype just in case.
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            mimetype: 'application/font-woff'
          }
        }]
      },
      {
        test: /\.woff2$/,
        // Inline small woff files and output them below font/.
        // Set mimetype just in case.
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            mimetype: 'application/font-woff2'
          }
        }]
      },
      {
        test: /\.ttf$|\.otf$|\.eot$|\.svg$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }]
      },
      {
        test: /\.mp3$|\.wav$/,
        use: [{
          loader: 'file-loader',
          query: {
            name: 'media/[name].[ext]'
          }
        }]
      },
      {
        test: /.*\.(gif|png|jpg)$/,
        use: [
          'file-loader?name=[name].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'bundle.css', disable: false, allChunks: true}),
  ]
}
