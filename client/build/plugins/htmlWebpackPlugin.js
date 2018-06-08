import HtmlWebpackPlugin from 'html-webpack-plugin';

export function htmlWebpackPlugin(options) {
  const { appName, disableInject } = options;

  return [
    new HtmlWebpackPlugin({
      template: `./client/${appName}/index.html`,
      filename: `./index.html`,
      inject: !disableInject
    })
  ];
}