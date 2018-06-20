import { DungeonChapter, DungeonBattle } from '../../../models';
import { messages } from '../../../../common/constants';

class Create {
  required = {
    body: [ 'name', 'chapters' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const dungeonChapter = await DungeonChapter.create(req.body);

    res.json(messages.REQUEST_SUCCESS(dungeonChapter));
  }
}

export const create = new Create();