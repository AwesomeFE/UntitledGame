import path from 'path';
import * as loaders from './loaders';
import * as plugins from './plugins';

export default (options) => {
  const {
    appName,
    chunkHash = '',
    sourceMap = true,
    vendor
  } = options;

  const vendorEntry = vendor ? { vendor } : {};

  return {
    entry: {
      app: `./client/src/${appName}/main.js`,
      ...vendorEntry
    },
    output: {
      path: path.join(__dirname, `../dist/${appName}/`),
      publicPath: `/public/${appName}/`,
      filename: `javascripts/[name]${chunkHash}.js`
    },
    resolve: {
      extensions: [
        '.js',
        '.vue'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.js/,
          use: loaders.babelLoader(options),
          exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
          include: [
            path.join(__dirname, `../src`)
          ]
        },
        {
          test: /\.vue/,
          use: loaders.vueLoader(options)
        },
        {
          test: /\.css$/,
          use: loaders.cssLoader(options)
        },
        {
          test: /\.scss$/,
          use: loaders.scssLoader(options)
        },
        {
          test: /\.less$/,
          use: loaders.lessLoader(options)
        },
        {
          test: /\.yaml$/,
          use: loaders.yamlLoader(options)
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: loaders.imageLoader(options),
          exclude: [
            path.join(__dirname, `../src/${appName}/assets/models`)
          ]
        },
        {
          test: /\.(woff2|woff|eot|svg|ttf)(\?v=\d+\.\d+\.\d+)?$/,
          use: loaders.fontLoader(options)
        },
        {
          test: /\/*\.(tga|babylon|gltf|bin|manifest|png|jpg|gif)$/,
          use: loaders.assetLoader(options),
          include: [
            path.join(__dirname, `../src/${appName}/assets/models`)
          ]
        }
      ]
    },
    plugins: [
      ...plugins.cleanPlugin(options),
      ...plugins.definePlugin(options),
      ...plugins.workboxPlugin(options),
      ...plugins.uglifyJsPlugin(options),
      ...plugins.copyWebpackPlugin(options),
      ...plugins.extractTextPlugin(options),
      ...plugins.htmlWebpackPlugin(options),
      ...plugins.commonsChunkPlugin(options),
      ...plugins.writeFileWebpackPlugin(options),
      ...plugins.htmlIncludeAssetsPlugin(options),
      ...plugins.hotModuleReplacementPlugin(options)
    ],
    devtool: sourceMap ? 'source-map' : undefined
  }
}