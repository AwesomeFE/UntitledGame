import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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

  return options.extract
    ? [MiniCssExtractPlugin.loader, cssLoader, resolveUrlLoader, lessLoader]
    : ['vue-style-loader', cssLoader, resolveUrlLoader, lessLoader];
}