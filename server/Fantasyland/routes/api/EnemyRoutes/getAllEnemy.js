import { Enemy } from '../../../models';
import { messages } from '../../../../common/constants';

class GetAllEnemy {
  required = {};

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    let enemys = await Enemy.find();
    enemys = enemys.map(enemy => enemy.toJSON());

    res.json(messages.REQUEST_SUCCESS(enemys));
  }
}

export const getAllEnemy = new GetAllEnemy();