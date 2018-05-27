import { User, Entry } from '../../../models';
import { messages } from '../../../../common/constants';
import { projectionFormat } from '../../../../common/utils/dataFormat';

class SignUpRoute {
  required = {
    body: [ 'password' ]
  };

  validate(req, res) {}

  async handler(req, res) {
    const user = await User.signIn(req.body);
    await Entry.log(req.ip, user);

    req.session.userId = user._id;

    const projection = user && user.projection;
    const formatedUser = user && projection && formatData(projection, user);
    res.json(messages.REQUEST_SUCCESS(formatedUser));
  }
}

export const SignUp = new SignUpRoute();