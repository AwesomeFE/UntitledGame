import { Player } from '../../../models';
import { messages } from '../../../../common/constants';

class DeletePlayer {
  required = {
    params: [ 'playerId' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {
    const { playerId } = req.params;
    const { players } = req.user;

    const isNotUserPlayer = players.every(playerItemId => playerItemId.toString() !== playerId);

    if(isNotUserPlayer) {
      throw messages.AUTH_INVALID;
    }
  }

  async handler(req, res) {
    const { playerId } = req.params;

    req.user.players = req.user.players.filter(playerItemId => playerItemId.toString() !== playerId);

    await req.user.save();
    await Player.findByIdAndRemove(playerId);

    res.json(messages.REQUEST_SUCCESS());
  }
}

export const deletePlayer = new DeletePlayer();