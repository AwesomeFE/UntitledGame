import axios from 'axios';
import { apiUrls } from '../common';

class DungeonService {
  getDungeons() {
    return axios(apiUrls.GET_DUNGEONS());
  }
}

export const Dungeon = new DungeonService();
