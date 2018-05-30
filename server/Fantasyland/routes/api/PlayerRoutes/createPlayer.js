import { Player } from '../../../models';
import { messages } from '../../../../common/constants';
import { getFieldsFromProjection } from '../../../../common/utils/dataFormat';

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
    const player = await Player.create(req.body);
    
    req.user.players.push(player);
    await req.user.save();

    const projection = player.projectionFromPlayerList;
    const formatedPlayer = getFieldsFromProjection(projection, player);

    res.json(messages.REQUEST_SUCCESS(formatedPlayer));
  }
}

export const createPlayer = new CreatePlayer();