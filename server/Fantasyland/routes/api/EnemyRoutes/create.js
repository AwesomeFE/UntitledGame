import { Enemy } from '../../../models';
import { messages } from '../../../../common/constants';

class Create {
  required = {
    body: [ 'name', 'gender' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const enemy = await Enemy.create(req.body);

    res.json(messages.REQUEST_SUCCESS(enemy && enemy.toJSON()));
  }
}

export const create = new Create();