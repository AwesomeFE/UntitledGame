import path from 'path';
import * as loaders from './loaders';
import * as plugins from './plugins';

const mode = process.env.NODE_ENV;
const appName = process.env.PRODUCT;
const isDevelopment = process.env.NODE_ENV === 'development';

const extract = !isDevelopment;
const minimize = !isDevelopment;
const sourceMap = isDevelopment;
const isHotReplace = isDevelopment;

const options = { mode, appName, extract, minimize, sourceMap, isHotReplace };

export default {
  mode,
  entry: {
    app: `./client/${appName}/main.ts`
  },
  output: {
    path: path.resolve(`client/dist/${appName}/`),
    publicPath: `/public/${appName}/`,
    filename: `javascripts/[name].js`
  },
  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.ts'
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: loaders.tsLoader(options)
      },
      {
        test: /\.js$/,
        use: loaders.babelLoader(options),
        // Issue: https://github.com/airyland/vux/issues/443#issuecomment-237688990
        include: [
          path.resolve(`client/${appName}`)
        ]
      },
      {
        test: /\.vue$/,
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
        test: /\.i18n$/,
        use: loaders.i18nLoader(options)
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: loaders.imageLoader(options),
        exclude: [
          path.resolve(`client/${appName}/assets/models`)
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
          path.resolve(`client/${appName}/assets/models`)
        ]
      }
    ]
  },
  plugins: [
    ...plugins.cleanPlugin(options),
    ...plugins.definePlugin(options),
    ...plugins.workboxPlugin(options),
    ...plugins.vueLoaderPlugin(options),
    ...plugins.copyWebpackPlugin(options),
    ...plugins.htmlWebpackPlugin(options),
    ...plugins.miniCssExtractPlugin(options),
    ...plugins.writeFileWebpackPlugin(options),
    ...plugins.htmlIncludeAssetsPlugin(options),
    ...plugins.hotModuleReplacementPlugin(options)
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
  // devtool: sourceMap ? 'source-map' : undefined
};