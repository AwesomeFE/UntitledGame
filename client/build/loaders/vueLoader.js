import { cssLoader } from './cssLoader';
import { scssLoader } from './scssLoader';
import { lessLoader } from './lessLoader';

export const vueLoader = (options) => {
  return {
    loader: 'vue-loader',
    options: {
      preLoaders: {
        i18n: 'yaml-loader'
      },
      loaders: {
        i18n: '@kazupon/vue-i18n-loader',
        css: cssLoader(options),
        scss: scssLoader(options),
        less: lessLoader(options),
        ts: [
          'bable-loader',
          'ts-loader'
        ]
      }
    }
  };
}