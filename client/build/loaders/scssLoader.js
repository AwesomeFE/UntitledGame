import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const scssLoader = (options) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: options.minimize,
      sourceMap: options.sourceMap
    }
  };

  // https://github.com/bholloway/resolve-url-loader#source-maps-required
  const scssLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: true
    }
  };

  const resolveUrlLoader = {
    loader: 'resolve-url-loader'
  };

  return options.extract
    ? [MiniCssExtractPlugin.loader, cssLoader, resolveUrlLoader, scssLoader]
    : ['vue-style-loader', cssLoader, resolveUrlLoader, scssLoader];
}