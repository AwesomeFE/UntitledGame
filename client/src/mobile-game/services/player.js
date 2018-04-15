import axios from 'axios';
import { constants } from '../../common';

class PlayerService {
  getPlayers() {
    return axios(constants.apiUrls.GET_PLAYERS());
  }

  create(formData) {
    return axios(constants.apiUrls.CREATE_PLAYER(formData));
  }

  deletePlayer(playerId) {
    return axios(constants.apiUrls.DELETE_PLAYER(playerId));
  }
}

export const Player = new PlayerService();
