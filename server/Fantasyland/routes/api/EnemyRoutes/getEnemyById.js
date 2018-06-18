import { Enemy } from '../../../models';
import { messages } from '../../../../common/constants';

class GetEnemyById {
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
    
    const enemy = (await Enemy.findById(enemyId)).toJSON();

    res.json(messages.REQUEST_SUCCESS(enemy));
  }
}

export const getEnemyById = new GetEnemyById();