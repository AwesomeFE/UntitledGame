import HtmlWebpackPlugin from 'html-webpack-plugin';

export function htmlWebpackPlugin(options) {
  const { appName } = options;

  return [
    new HtmlWebpackPlugin({
      chunks: ['app', 'vendor', 'importSW', 'manifest'],
      template: `./client/src/${appName}/index.html`,
      filename: `./index.html`,
      inject: true
    })
  ];
}