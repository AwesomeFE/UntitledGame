import { Consumable } from '../../../models';
import { messages } from '../../../../common/constants';

class GetById {
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
    
    const consumable = await Consumable.findById(consumableId);

    res.json(messages.REQUEST_SUCCESS(consumable));
  }
}

export const getById = new GetById();