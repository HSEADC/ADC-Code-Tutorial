const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    example_1: './src/examples/example_1/example_1.jsx',
    example_2: './src/examples/example_2/example_2.jsx',
    example_3: './src/examples/example_3/example_3.jsx',
    example_4: './src/examples/example_4/example_4.jsx',
    example_5: './src/examples/example_5/example_5.jsx',
    example_6: './src/examples/example_6/example_6.jsx',
    example_7: './src/examples/example_7/example_7.jsx',
    example_8: './src/examples/example_8/example_8.jsx'
  },
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_1/example_1.html',
      filename: './example_1/example_1.html',
      chunks: ['example_1']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_2/example_2.html',
      filename: './example_2/example_2.html',
      chunks: ['example_2']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_3/example_3.html',
      filename: './example_3/example_3.html',
      chunks: ['example_3']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_4/example_4.html',
      filename: './example_4/example_4.html',
      chunks: ['example_4']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_5/example_5.html',
      filename: './example_5/example_5.html',
      chunks: ['example_5']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_6/example_6.html',
      filename: './example_6/example_6.html',
      chunks: ['example_6']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_7/example_7.html',
      filename: './example_7/example_7.html',
      chunks: ['example_7']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_8/example_8.html',
      filename: './example_8/example_8.html',
      chunks: ['example_8']
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
