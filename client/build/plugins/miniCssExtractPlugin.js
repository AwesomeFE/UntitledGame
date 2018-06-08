import MiniCssExtractPlugin  from 'mini-css-extract-plugin'

export function miniCssExtractPlugin (options) {
  const { extract } = options;
  const plugin = [];

  if(extract) {
    plugin.push(new MiniCssExtractPlugin({
      filename: 'stylesheets/[name].css',
      chunkFilename: 'stylesheets/[id].css'
    }));
  }

  return plugin;
}