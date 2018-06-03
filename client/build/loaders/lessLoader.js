import ExtractTextPlugin from 'extract-text-webpack-plugin';

export const lessLoader = (options) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: options.minimize,
      sourceMap: options.sourceMap
    }
  };

  // https://github.com/bholloway/resolve-url-loader#source-maps-required
  const lessLoader = {
    loader: 'less-loader',
    options: {
      sourceMap: true
    }
  };

  const resolveUrlLoader = {
    loader: 'resolve-url-loader'
  };

  if(options.extract) {
    return ExtractTextPlugin.extract({
      use: [cssLoader, resolveUrlLoader, lessLoader],
      fallback: 'vue-style-loader'
    });
  }

  return ['vue-style-loader', cssLoader, resolveUrlLoader, lessLoader];
}