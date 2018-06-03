import ExtractTextPlugin from 'extract-text-webpack-plugin';

export function extractTextPlugin(options) {
  const { extract } = options;
  const plugin = [];

  if(extract) {
    plugin.push(new ExtractTextPlugin(`stylesheets/app.css`));
  }

  return plugin;
}