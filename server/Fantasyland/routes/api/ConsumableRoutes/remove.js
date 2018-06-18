import { Consumable } from '../../../models';
import { messages } from '../../../../common/constants';

class Remove {
  required = {
    params: [ 'consumableId' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const { consumableId } = req.params;

    await Consumable.findByIdAndRemove(consumableId);
    res.json(messages.REQUEST_SUCCESS());
  }
}

export const remove = new Remove();