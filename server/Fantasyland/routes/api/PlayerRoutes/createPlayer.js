import { Player } from '../../../models';
import { messages } from '../../../../common/constants';

class CreatePlayer {
  required = {
    body: [ 'name', 'gender' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const { messages } = this;
    const player = await Player.create(req.body);
    
    req.user.players.push(player);
    await req.user.save();

    res.json(messages.REQUEST_SUCCESS(player));
  }
}

export const createPlayer = new CreatePlayer();