import axios from 'axios';
import { apiUrls } from '../common';

class DungeonService {
  getDungeons() {
    return axios(apiUrls.GET_DUNGEONS());
  }
  startLevel(playerId, dungeonId, levelIdx) {
    return axios(apiUrls.START_DUNGEONS_LEVEL(playerId, dungeonId, levelIdx));
  }
}

export const Dungeon = new DungeonService();
