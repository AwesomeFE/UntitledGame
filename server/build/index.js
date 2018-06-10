require('../../common/config');
const webpack = require('webpack');
const { NODE_ENV, PRODUCT } = process.env;
const webpackConfig = require(`./config.${NODE_ENV}`)(PRODUCT);

webpack(webpackConfig).run((err, stat) => {
  if (err) throw err;

  process.stdout.write(stat.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');
});