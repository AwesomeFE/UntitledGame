import { messages } from '../../constants';

class SignOutRoute {
  required = {};

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    req.session.userId = null;
    res.json(messages.REQUEST_SUCCESS());
  }
}

export const SignOut = new SignOutRoute();