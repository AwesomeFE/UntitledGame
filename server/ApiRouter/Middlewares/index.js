import BasicRouter from '../BasicRouter';
import { UserController } from '../../Controllers';

class Middlewares extends BasicRouter {
  constructor() {
    super();
    this.setUser = this.setUser.bind(this);
    this.ensureSignIn = this.ensureSignIn.bind(this);
  }

  async setUser(req, res, next) {
    const { userId } = req.session;
    req.user = userId && await UserController.findById(userId);
    next();
  }

  ensureSignIn(req, res, next) {
    req.user ? next() : next(this.messages.AUTH_INVALID);
  }

  ensureAdmin(req, res, next) {
    req.user.isAdmin ? next() : next(this.messages.AUTH_INVALID);
  }
}

export default new Middlewares();