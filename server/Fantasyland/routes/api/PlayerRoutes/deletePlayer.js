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

  validate(req, res) {}

  async handler(req, res) {
    const { playerId } = req.params;

    req.user.players = req.user.players.filter(playerItem => playerItem !== playerId);

    await req.user.save();
    await Player.findByIdAndRemove(playerId);

    res.json(messages.REQUEST_SUCCESS());
  }
}

export const deletePlayer = new DeletePlayer();