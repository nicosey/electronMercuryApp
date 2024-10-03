// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/renderer.js',
  mode: 'development',
  target: 'electron-renderer',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'renderer.js',
  },
  experiments: {
    asyncWebAssembly: true, // Enable async WebAssembly
    // syncWebAssembly: true, // Enable sync WebAssembly (deprecated in Webpack 5)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.wasm$/,
        type: 'asset/resource'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.wasm'], // Ensure .wasm is included
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
