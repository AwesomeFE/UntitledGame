import '../../common/config';
import webpack from 'webpack';
import webpackServer from './dev-server';
import webpackConfig from './webpack.config';

let compiler = {};

switch (process.env.NODE_ENV) {
  case 'development': {
    const { SERVER_HOST, SERVER_PORT } = process.env;
    const proxyConfig = {
      '/api': {
        target: `http://${SERVER_HOST}:${SERVER_PORT}`,
        changeOrigin: true,
        headers: {
          Referer: `http://${SERVER_HOST}:${SERVER_PORT}/`
        }
      }
    };

    webpackServer(webpackConfig, proxyConfig);
    break;
  }
  case 'production': {
    compiler = webpack(webpackProductionConfig);
    compiler.run(resultHandler);
    break;
  }
}

function resultHandler(err, stat) {
  if (err) throw err;

  process.stdout.write(stat.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');
}