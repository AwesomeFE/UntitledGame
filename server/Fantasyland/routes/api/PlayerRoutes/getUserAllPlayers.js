import { Player } from '../../../models';
import { messages } from '../../../../common/constants';
import { getFieldsFromProjection } from '../../../../common/utils/dataFormat';

class GetUserAllPlayers {
  required = {};

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const players = await Player.find();
    const formatedPlayers = [];

    for(const player of players) {
      const projection = player.projectionFromPlayerList;

      formatedPlayers.push(getFieldsFromProjection(projection, player));
    }

    res.json(messages.REQUEST_SUCCESS(formatedPlayers));
  }
}

export const getUserAllPlayers = new GetUserAllPlayers();