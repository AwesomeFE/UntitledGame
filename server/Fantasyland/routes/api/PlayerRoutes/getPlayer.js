import { Player } from '../../../models';
import { messages } from '../../../../common/constants';

class GetPlayer {
  required = {};

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const players = await Player.find();

    res.json(messages.REQUEST_SUCCESS(players));
  }
}

export const getPlayer = new GetPlayer();