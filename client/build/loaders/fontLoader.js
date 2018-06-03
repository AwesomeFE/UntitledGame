export const fontLoader = () => [
  {
    loader: 'url-loader',
    options: {
      name: 'fonts/[hash].[ext]',
      limit: '1000'
    }
  }
];