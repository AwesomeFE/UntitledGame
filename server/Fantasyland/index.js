import path from 'path';
import express from 'express';

import '../../common/config';
import Application from '../common/Application';
import { ApiRoutes, WebRoutes } from './routes';

class Server extends Application {
  constructor() {
    super();

    this.useLogger();
    this.useSession();
    this.useBodyParser();
    this.useViewEngine();
    this.useServiceWorker();
    this.useStaticResource();
    this.useRouter();
    this.useExtends();
    this.connectDB();
    this.useMessageHandler();
    this.run();
  }

  useStaticResource() {
    this.app.use('/public', express.static(path.resolve('client/dist/Fantasyland')));
    this.app.use('/uploads', express.static(path.resolve('uploads')));
  }

  useViewEngine() {
    this.app.set('view engine', 'ejs');
    this.app.set('views', path.resolve('client'));
  }

  useRouter() {
    this.app.use(/^\/api/, ApiRoutes);
    // this.app.use(/^(?!\/api\/[\s\S]+)/, WebRoutes);
  }
}

export default new Server();
