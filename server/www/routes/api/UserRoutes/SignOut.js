import { messages } from '../../../../common/constants';

class SignOutRoute {
  required = {};

  validate(req, res) {}

  async handler(req, res) {
    req.session.userId = null;
    res.json(messages.REQUEST_SUCCESS());
  }
}

export const SignOut = new SignOutRoute();