import { Buff } from '../../../models';
import { messages } from '../../../../common/constants';

class GetAll {
  required = {};

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const buff = await Buff.find().select('_id name');

    res.json(messages.REQUEST_SUCCESS(buff));
  }
}

export const getAll = new GetAll();