import { DungeonInfo } from '../../../models';
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
    const dungeonInfo = await DungeonInfo.create(req.body);

    res.json(messages.REQUEST_SUCCESS(dungeonInfo));
  }
}

export const createDungeonChapter = new CreateDungeonChapter();