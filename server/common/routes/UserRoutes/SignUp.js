import { User } from '../../models';
import { messages } from '../../constants';
import { projectionFormat } from '../../utils/dataFormat';

class SignUpRoute {
  required = {
    body: [ 'password' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {
    const { username, email, mobile } = req.body;

    if(!username && !email && !mobile) {
      throw messages.SIGNUP_INVALID;
    }
  }

  async handler(req, res) {
    const user = await User.signUp(req.body);

    req.session.userId = user._id;

    const projection = user && user.projection;
    const formatedUser = user && projection && projectionFormat(projection, user);
    res.json(messages.REQUEST_SUCCESS(formatedUser));
  }
}

export const SignUp = new SignUpRoute();