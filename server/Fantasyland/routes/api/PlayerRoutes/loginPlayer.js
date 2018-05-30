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

  validate(req, res) {}

  async handler(req, res) {
    const { playerId } = req.params;
    const { players } = req.user;
    
    let currentPlayer = null;

    if(players.includes(playerId)) {
      const player = await Player.findById(playerId);
      currentPlayer = player && player.toJSON();
    }

    req.session.playerId = currentPlayer._id;
    
    res.json(messages.REQUEST_SUCCESS(currentPlayer));
  }
}

export const loginPlayer = new LoginPlayer();