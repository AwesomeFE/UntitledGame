import VueLoaderPlugin from 'vue-loader/lib/plugin';

export function vueLoaderPlugin() {
  return [
    new VueLoaderPlugin()
  ];
}