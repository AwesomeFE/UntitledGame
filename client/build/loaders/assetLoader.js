export default () => [
  {
    loader: 'url-loader',
    options: {
      name: 'assets/[name].[ext]',
      limit: '1'
    }
  }
]