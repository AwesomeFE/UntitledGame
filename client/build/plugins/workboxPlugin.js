import path from 'path';
import WorkboxPlugin from 'workbox-webpack-plugin';

export function workboxPlugin(options) {
  const { useServiceWorker, appName } = options;
  const plugin = [];

  if(useServiceWorker) {
    plugin.push(new WorkboxPlugin({
      maximumFileSizeToCacheInBytes: 3145728,
      swSrc: `./client/src/${appName}/sw/index.js`,
      swDest: `./client/dist/${appName}/javascripts/sw.js`,
      templatedUrls: {
        '/': 'index.html'
      },
      clientsClaim: true,
      skipWaiting: true
    }));
  }

  return plugin;
}