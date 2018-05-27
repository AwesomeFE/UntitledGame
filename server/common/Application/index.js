import http from 'http';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';

import Logger from '../Services/Logger';
import Message from '../Services/Message';
import Database from '../Services/Database';

class Application {
  host = process.env.SERVER_HOST;
  port = process.env.SERVER_PORT;
  secret = process.env.SERVER_SECRET;
  extends = process.env.EXTENDS ? process.env.EXTENDS.split(',') : [];

  app = express();
  server = http.createServer(this.app);

  useLogger() {
    // create loggers
    Logger.createLogger('http');
    Logger.createLogger('system');
    Logger.createLogger('controller');

    // startup loggers
    Logger.startupLogger();

    // log the http requests
    this.app.use(Logger.getHttpLogger());
  }

  useSession() {
    const sessionStore = session({
      secret: this.secret,
      store: Database.getSessionStore(),
      resave: false,
      saveUninitialized: true
    });

    this.app.use(sessionStore);
  }

  useBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
  }

  useStaticResource() {
    throw 'Please add "useStaticResource" Method';
  }

  useViewEngine() {
    throw 'Please add "useViewEngine" Method';
  }

  useRouter() {
    throw 'Please add "useRouter" Method';
  }

  // Should last call to catch all Express Message
  useMessageHandler() {
    this.app.use(Message.handler);
  }

  useExtends() {
    for(const name of this.extends) {
      try {
        const { default: extendModule } = require(`../Extends/${name}`);
        extendModule(this.app);
      } catch (e) {
        console.warn(`[Warning]: Extend application "${name}" is not existed.`);
      }
    }
  }

  useServiceWorker() {
    this.app.use((req, res, next) => {
      res.set('Service-Worker-Allowed', '/');
      next();
    });
  }

  run() {
    this.server.listen(this.port, this.host);
  }

  connectDB() {
    Database.connectDB();
  }
};

export default Application;