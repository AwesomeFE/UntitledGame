import { Player } from '../../../models';
import { messages } from '../../../../common/constants';

class LoginPlayer {
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
    const { players } = req.user;

    let currentPlayer = null;

    const player = await Player.findById(playerId);
    currentPlayer = player && player.toJSON();
    req.session.playerId = playerId;
    
    res.json(messages.REQUEST_SUCCESS(currentPlayer));
  }
}

export const loginPlayer = new LoginPlayer();