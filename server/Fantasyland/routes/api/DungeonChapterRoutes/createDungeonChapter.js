import { DungeonChapter, Dungeon } from '../../../models';
import { messages } from '../../../../common/constants';

class CreateDungeonChapter {
  required = {
    body: [ 'name', 'dungeons' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    let { dungeons: dungeonsData = [] } = req.body;

    dungeonsData = [...dungeonsData];
    dungeonsData = dungeonsData.map(dungeonData => dungeonData.dungeon);

    const dungeons = await Dungeon.create(dungeonsData);
    const dungeonChapter = await DungeonChapter.create(req.body);

    res.json(messages.REQUEST_SUCCESS(dungeonChapter));
  }

  getDungeonsData(dungeonsData = []) {
    return [...dungeonsData].map(dungeonData => dungeonData.dungeon);
  }
}

export const createDungeonChapter = new CreateDungeonChapter();
