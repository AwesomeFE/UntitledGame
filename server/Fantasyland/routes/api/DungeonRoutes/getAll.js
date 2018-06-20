import { DungeonChapter } from '../../../models';
import { messages } from '../../../../common/constants';

class GetAll {
  required = {};

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    let dungeonChapters = await DungeonChapter.find();
    dungeonChapters = dungeonChapters.map(item => item.toJSON());

    res.json(messages.REQUEST_SUCCESS(dungeonChapters));
  }
}

export const getAll = new GetAll();
