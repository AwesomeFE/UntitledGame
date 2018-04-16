import axios from 'axios';
import { apiUrls } from '../common';

class PlayerService {
  getPlayers() {
    return axios(apiUrls.GET_PLAYERS());
  }

  create(formData) {
    return axios(apiUrls.CREATE_PLAYER(formData));
  }

  deletePlayer(playerId) {
    return axios(apiUrls.DELETE_PLAYER(playerId));
  }
}

export const Player = new PlayerService();
