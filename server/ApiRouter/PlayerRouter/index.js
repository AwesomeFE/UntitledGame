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

  deletePlayer = {
    required: {
      params: [ 'playerId' ]
    },
    validate: (req, res) => {},
    handler: async (req, res) => {
      const { messages } = this;
      const { playerId } = req.params;

      req.user.players = req.user.players.filter(playerItem => playerItem !== playerId);

      await req.user.save();
      await PlayerController.findByIdAndRemove(playerId);

      res.json(messages.REQUEST_SUCCESS());
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
