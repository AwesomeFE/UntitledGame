import { Buff } from '../../../models';
import { messages } from '../../../../common/constants';

class GetById {
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
    
    const buff = await Buff.findById(buffId);

    res.json(messages.REQUEST_SUCCESS(buff));
  }
}

export const getById = new GetById();