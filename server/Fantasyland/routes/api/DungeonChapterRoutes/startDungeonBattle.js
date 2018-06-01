import { DungeonChapter } from '../../../models';
import { messages } from '../../../../common/constants';

class StartDungeonBattle {
  required = {
    params: [ 'dungeonBattleId' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const { dungeonBattleId } = req.params;

    const dungeonChapter = await DungeonChapter.findOne({
      'chapters.dungeons.type': 'dungeon-battle',
      'chapters.dungeons._id': dungeonBattleId
    });

    const currentDungeonBattle = this.getDungeonBattleById(dungeonChapter, dungeonBattleId);

    res.json(messages.REQUEST_SUCCESS(currentDungeonBattle));
  }

  getDungeonBattleById(dungeonChapter, _id) {
    let currentDungeonBattle = null;

    for(const chapter of dungeonChapter.chapters) {
      for(const dungeon of chapter.dungeons || []) {
        if(dungeon.type === 'dungeon-battle' && dungeon._id.toString() === _id) {
          currentDungeonBattle = dungeon;
        }
      }
    }

    return currentDungeonBattle;
  }
}

export const startDungeonBattle = new StartDungeonBattle();

// (async () => {
//   const dungeonChapter = await DungeonChapter
//     .find({
//       'chapters.dungeons.type': 'dungeon-battle',
//       'chapters.dungeons._id': '5b10d4b534b16838d000e75b'
//     });

//   console.log(dungeonChapter.toString());
// })();
