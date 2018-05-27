import { User, Entry } from '../../../models';
import { messages } from '../../../../common/constants';
import { projectionFormat } from '../../../../common/utils/dataFormat';

class SignInRoute {
  required = {
    body: [ 'password' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const user = await User.signIn(req.body);
    await Entry.log(req.ip, user);

    req.session.userId = user._id;

    const projection = user && user.projection;
    const formatedUser = user && projection && projectionFormat(projection, user);
    res.json(messages.REQUEST_SUCCESS(formatedUser));
  }
}

export const SignIn = new SignInRoute();