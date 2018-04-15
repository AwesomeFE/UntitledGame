import BasicRouter from '../BasicRouter';
import { DungeonController } from '../../Controllers';

class DungeonRouter extends BasicRouter {
  getAllDungeons = {
    validate: (req, res) => {},
    handler: async (req, res) => {
      const { messages } = this;

      const conditions = {};
      const dungeons = await DungeonController.find(conditions).populate('enemys');

      res.json(messages.REQUEST_SUCCESS(dungeons));
    }
  };

  createDungeon = {
    required: {
      body: [
        'name', 'order', 'levels'
      ]
    },
    validate: (req, res) => {},
    handler: async (req, res) => {
      const { messages } = this;

      const dungeon = await DungeonController.create(req.body);

      res.json(messages.REQUEST_SUCCESS(dungeon));
    }
  };
}

export default new DungeonRouter();
