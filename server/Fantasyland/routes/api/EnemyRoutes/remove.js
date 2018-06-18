import { Enemy } from '../../../models';
import { messages } from '../../../../common/constants';

class Remove {
  required = {
    params: [ 'enemyId' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const { enemyId } = req.params;

    await Enemy.findByIdAndRemove(enemyId);
    res.json(messages.REQUEST_SUCCESS());
  }
}

export const remove = new Remove();