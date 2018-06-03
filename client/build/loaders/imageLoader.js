export const imageLoader = () => [
  {
    loader: 'url-loader',
    options: {
      name: 'images/[hash].[ext]',
      limit: '1024'
    }
  }
];