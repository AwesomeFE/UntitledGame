import { messages } from '../../../common/constants';
import { User, Player } from '../../models';

class Middlewares {
  constructor() {
    this.setUser = this.setUser.bind(this);
    this.ensureSignIn = this.ensureSignIn.bind(this);
    this.ensureAdmin = this.ensureAdmin.bind(this);
  }

  async setUser(req, res, next) {
    const { userId } = req.session;
    req.user = userId && await User.findById(userId);
    next();
  }

  async setPlayer(req, res, next) {
    const { playerId } = req.session;
    req.player = playerId && await Player.findById(playerId);
    next();
  }

  ensurePlayerLogin(req, res, next) {
    (req.player || req.user.isAdmin) ? next() : next(messages.AUTH_INVALID);
  }

  ensureSignIn(req, res, next) {
    req.user ? next() : next(messages.AUTH_INVALID);
  }

  ensureAdmin(req, res, next) {
    req.user.isAdmin ? next() : next(messages.AUTH_INVALID);
  }
}

export default new Middlewares();