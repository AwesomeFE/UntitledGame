import BasicRouter from '../BasicRouter';
import { UserController, PlayerController } from '../../Controllers';

class PlayerRouter extends BasicRouter {
  create = {
    required: {
      body: [
        'name', 'gender', 'age'
      ]
    },
    validate: (req, res) => {},
    handler: async (req, res) => {
      const { messages } = this;
      const player = await PlayerController.create(req.body);
      
      req.user.players.push(player);
      await req.user.save();

      res.json(messages.REQUEST_SUCCESS(player));
    }
  };

  getPlayers = {
    handler: async (req, res) => {
      const { messages } = this;
      const players = await UserController.getPlayers(req.session.userId);

      res.json(messages.REQUEST_SUCCESS(players));
    }
  };
}

export default new PlayerRouter();
