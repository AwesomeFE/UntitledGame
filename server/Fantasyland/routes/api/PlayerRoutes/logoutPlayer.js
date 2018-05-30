import { Player } from '../../../models';
import { messages } from '../../../../common/constants';

class LogoutPlayer {
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

    if(players.includes(playerId)) {
      delete req.session.playerId;
    }
    
    res.json(messages.REQUEST_SUCCESS());
  }
}

export const logoutPlayer = new LogoutPlayer();