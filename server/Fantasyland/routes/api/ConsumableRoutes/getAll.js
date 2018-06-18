import { Consumable } from '../../../models';
import { messages } from '../../../../common/constants';

class GetAll {
  required = {};

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const consumable = await Consumable.find().select('_id name');

    res.json(messages.REQUEST_SUCCESS(consumable));
  }
}

export const getAll = new GetAll();