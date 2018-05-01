import BasicRouter from '../BasicRouter';
import { UserController, EntryController } from '../../Controllers';

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
      const { messages, formatData } = this;
      const user = await UserController.signUp(req.body);

      req.session.userId = user._id;

      const projection = user && user.projection;
      const formatedUser = user && projection && formatData(projection, user);
      res.json(messages.REQUEST_SUCCESS(formatedUser));
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
      const { messages, formatData } = this;

      const user = await UserController.signIn(req.body);
      await EntryController.log(req.ip, user);

      req.session.userId = user._id;

      const projection = user && user.projection;
      const formatedUser = user && projection && formatData(projection, user);
      res.json(messages.REQUEST_SUCCESS(formatedUser));
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
