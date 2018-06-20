import axios, { AxiosResponse } from 'axios';
import Types from './types.d';
import { apiUrls } from '../../constants';

class Service {
  getDungeon(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_DUNGEON());
  }

  getDungeonById(id: string): Promise<AxiosResponse> {
    return axios(apiUrls.GET_DUNGEON_BY_ID(id));
  }

  createDungeon(data: Types.Model): Promise<AxiosResponse> {
    delete data._id;
    return axios(apiUrls.CREATE_DUNGEON(data));
  }

  updateDungeon(data: Types.Model): Promise<AxiosResponse> {
    return axios(apiUrls.UPDATE_DUNGEON(data));
  }
}

export const Dungeon = new Service();