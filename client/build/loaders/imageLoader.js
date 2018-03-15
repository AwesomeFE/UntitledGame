export default () => [
  {
    loader: 'url-loader',
    options: {
      name: 'images/[name].[ext]',
      limit: '1'
    }
  }
]