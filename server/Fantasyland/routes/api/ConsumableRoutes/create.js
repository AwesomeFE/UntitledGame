import { Consumable } from '../../../models';
import { messages } from '../../../../common/constants';

class Create {
  required = {
    body: [ 'name' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const consumable = await Consumable.create(req.body);

    res.json(messages.REQUEST_SUCCESS(consumable));
  }
}

export const create = new Create();