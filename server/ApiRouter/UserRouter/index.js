import BasicRouter from '../BasicRouter';
import { UserController, EntryController, PlayerController } from '../../Controllers';

class UserRouter extends BasicRouter {

  signUp = {
    required: {
      body: [
        'password'
      ]
    },
    validate: (req, res) => {
      const { username, email, mobile } = req.body;

      if(!username && !email && !mobile) {
        throw this.messages.SIGNUP_INVALID;
      }
    },
    handler: async (req, res) => {
      const { messages } = this;
      const user = await UserController.signUp(req.body);

      res.json(messages.REQUEST_SUCCESS(user));
    }
  };

  signIn = {
    required: {
      body: [
        'password'
      ]
    },
    validate: (req, res) => {},
    handler: async (req, res) => {
      const { messages } = this;

      const user = await UserController.signIn(req.body);
      await EntryController.log(req.ip, user);

      req.session.userId = user._id;

      res.json(messages.REQUEST_SUCCESS(user));
    }
  };

  getSessionUser = {
    required: {},
    validate: (req, res) => {},
    handler: async (req, res) => {
      const { messages, formatData } = this;
      const { user } = req;
      const projection = user && user.projection;
      const formatedUser = user && projection && formatData(projection, user);

      res.json(messages.REQUEST_SUCCESS(formatedUser));
    }
  };

  signout = {
    required: {},
    validate: (req, res) => {},
    handler: async (req, res) => {
      const { messages } = this;
      req.session.userId = null;

      res.json(messages.REQUEST_SUCCESS());
    }
  };
}

export default new UserRouter();
