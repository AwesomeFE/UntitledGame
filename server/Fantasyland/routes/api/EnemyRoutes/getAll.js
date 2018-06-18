import { Enemy } from '../../../models';
import { messages } from '../../../../common/constants';

class GetAll {
  required = {};

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const enemys = await Enemy.find().select('_id name');

    res.json(messages.REQUEST_SUCCESS(enemys));
  }
}

export const getAll = new GetAll();