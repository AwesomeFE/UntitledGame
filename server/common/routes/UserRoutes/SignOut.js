import { messages } from '../../constants';

class SignOut {
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

export const signOut = new SignOut();