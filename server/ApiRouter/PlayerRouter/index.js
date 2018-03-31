import BasicRouter from '../BasicRouter';
import { UserController, PlayerController } from '../../Controllers';

class PlayerRouter extends BasicRouter {
  create = {
    required: {
      body: [
        'name', 'gender'
      ]
    },
    validate: (req, res) => {},
    handler: async (req, res) => {
      const { messages } = this;
      const player = await PlayerController.create(req.body);

      res.json(messages.REQUEST_SUCCESS(player));
    }
  };
}

export default new PlayerRouter();
