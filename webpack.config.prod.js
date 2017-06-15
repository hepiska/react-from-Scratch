var path = require('path');
var webpack = require('webpack');
var public_dir = "src/frontend";
console.log(path.join(__dirname, 'src/frontend' , 'index.html'));

var config = {
   entry: './src/index.js',
   output: {
     path: path.join(__dirname, '/dist/'),
     filename: 'build.js',
     publicPath: '/'
   },
   devServer: {
      inline: true,
      port: 8080
   },
   plugins:[
     new webpack.DefinePlugin({
       'process.env':{
         'NODE_ENV': JSON.stringify('production')
       }
     }),
     new webpack.optimize.UglifyJsPlugin({
       compress:{
         warnings: true
       }
     })
   ],
   module: {
     loaders: [
       {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
       query: {
         presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;
