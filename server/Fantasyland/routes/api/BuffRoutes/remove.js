import { Buff } from '../../../models';
import { messages } from '../../../../common/constants';

class Remove {
  required = {
    params: [ 'buffId' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const { buffId } = req.params;

    await Buff.findByIdAndRemove(buffId);
    res.json(messages.REQUEST_SUCCESS());
  }
}

export const remove = new Remove();