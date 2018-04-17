import BasicRouter from '../BasicRouter';
import { DungeonController } from '../../Controllers';
import { getRandomResult } from './helper';

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

  startDungeonLevel = {
    required: {
      body: [
        'playerId', 'dungeonId', 'levelIdx'
      ]
    },
    validate: (req, res) => {},
    handler: async (req, res) => {
      const { messages } = this;
      const { playerId, dungeonId, levelIdx } = req.body;
      const battles = [];

      const dungeon = await DungeonController.findById(dungeonId).populate('levels.stages.enemys.enemy');
      if(!dungeon) throw messages.DUNGEON_NOTFOUND;

      const level = dungeon.toJSON().levels.find(level => level.order === +levelIdx);
      if(!level) throw messages.DUNGEON_LEVEL_NOTFOUND;

      for(const stage of level.stages) {
        const enemys = [];

        for(let i = 0; i < stage.enemyNumber; i++) {
          enemys.push(getRandomResult(stage.enemys));
        }

        battles.push({ enemys });
      }

      res.json(messages.REQUEST_SUCCESS(battles));
    }
  };
}

export default new DungeonRouter();
