'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const build = require('./build');

module.exports = merge => {
  const wpc = Object.assign(merge || {}, {

    output: Object.assign({}, build.js.output, {
      libraryTarget: 'umd'
    }),

    plugins: [
      new ExtractTextPlugin('app.css')
    ],

    resolve: {
      extensions: [ '*', '.js', '.jsx', '.css' ],
      modules: [
        'node_modules',
        `${ build.projDir }/src`,
      ],
    },

    module: {

      rules: [{
        test: /\.jsx?$/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => ([
                  require("postcss-import")({path: ["node_modules", build.src]}),
                  require("postcss-cssnext")(),
                ]),
              },
            },
          ],
        }),
      }],

    },

  });

  if (!build.production) {
    wpc.devtool = '#source-map';
  }

  return wpc;
};
