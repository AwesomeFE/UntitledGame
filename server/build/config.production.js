const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = product => {
  return {
    mode: 'production',
    target: 'node',
    entry: {
      index: ['babel-polyfill', `./server/${product}`]
    },
    output: {
      path: path.resolve(`server/dist/`),
      filename: `[name].js`
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            plugins: [
              'transform-class-properties',
              'transform-decorators-legacy'
            ],
            presets: ['env', 'stage-0']
          }
        }
      ]
    },
    externals: [nodeExternals()]
  };
};
