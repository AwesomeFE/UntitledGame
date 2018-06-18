import axios, { AxiosResponse } from 'axios';
import Types from './types.d';
import { apiUrls } from '../../constants';

class EnemyService {
  getEnemy(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_ENEMY());
  }

  getEnemyById(id: string): Promise<AxiosResponse> {
    return axios(apiUrls.GET_ENEMY_BY_ID(id));
  }

  createEnemy(data: Types.Model): Promise<AxiosResponse> {
    delete data._id;
    return axios(apiUrls.CREATE_ENEMY(data));
  }

  updateEnemy(data: Types.Model): Promise<AxiosResponse> {
    return axios(apiUrls.UPDATE_ENEMY(data));
  }
}

export const Enemy = new EnemyService();