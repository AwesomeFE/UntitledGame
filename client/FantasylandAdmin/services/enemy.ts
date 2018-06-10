import axios, { AxiosResponse } from 'axios';
import { Store } from '../types/index.d';
import { apiUrls } from '../constants';

class EnemyService {
  getEnemy(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_ENEMY());
  }
}

export const Enemy = new EnemyService();