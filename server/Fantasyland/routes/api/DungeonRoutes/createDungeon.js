import { Player } from '../../../models';
import { messages } from '../../../../common/constants';

class CreateDungeon {
  required = {
    params: [ 'playerId' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const { playerId } = req.params;
    const player = await Player.findById(playerId);
    const formatedPlayer = player && player.toJSON();

    res.json(messages.REQUEST_SUCCESS(formatedPlayer));
  }
}

export const createDungeon = new CreateDungeon();