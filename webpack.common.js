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
    example_8: './src/examples/example_8/example_8.jsx',
    example_9: './src/examples/example_9/example_9.jsx',
    example_10: './src/examples/example_10/example_10.jsx',
    example_11: './src/examples/example_11/example_11.jsx',
    example_12: './src/examples/example_12/example_12.jsx',
    example_13: './src/examples/example_13/example_13.jsx',
    example_14: './src/examples/example_14/example_14.jsx',
    example_15: './src/examples/example_15/example_15.jsx'
  },
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, 'docs'),
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
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_9/example_9.html',
      filename: './example_9/example_9.html',
      chunks: ['example_9']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_10/example_10.html',
      filename: './example_10/example_10.html',
      chunks: ['example_10']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_11/example_11.html',
      filename: './example_11/example_11.html',
      chunks: ['example_11']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_12/example_12.html',
      filename: './example_12/example_12.html',
      chunks: ['example_12']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_13/example_13.html',
      filename: './example_13/example_13.html',
      chunks: ['example_13']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_14/example_14.html',
      filename: './example_14/example_14.html',
      chunks: ['example_14']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/examples/example_15/example_15.html',
      filename: './example_15/example_15.html',
      chunks: ['example_15']
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
