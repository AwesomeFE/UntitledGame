import '../../common/config';
import Application from '../common/Application';

class Server extends Application {
  constructor() {
    super();

    this.useLogger();
    // this.useSession();
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

  }

  useViewEngine() {

  }

  useRouter() {

  }
}

export default new Server();
