import axios, { AxiosResponse } from 'axios';
import { Store } from '../types/index.d';
import { apiUrls } from '../constants';

class EnemyService {
  getEnemy(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_ENEMY());
  }
  getEnemyById(enemyId: string): Promise<AxiosResponse> {
    return axios(apiUrls.GET_ENEMY_BY_ID(enemyId));
  }
}

export const Enemy = new EnemyService();