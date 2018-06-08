import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const cssLoader = (options) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: options.minimize,
      sourceMap: options.sourceMap
    }
  };

  return options.extract
    ? [MiniCssExtractPlugin.loader, cssLoader]
    : ['vue-style-loader', cssLoader];
}