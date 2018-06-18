import { Buff } from '../../../models';
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
    const buff = await Buff.create(req.body);

    res.json(messages.REQUEST_SUCCESS(buff));
  }
}

export const create = new Create();