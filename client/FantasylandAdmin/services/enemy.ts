import axios, { AxiosResponse } from 'axios';
import { FormData } from '../types/index.d';
import { apiUrls } from '../constants';

class EnemyService {
  getEnemy(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_ENEMY());
  }

  getEnemyById(enemyId: string): Promise<AxiosResponse> {
    return axios(apiUrls.GET_ENEMY_BY_ID(enemyId));
  }

  createEnemy(enemyData: FormData.Enemy): Promise<AxiosResponse> {
    return axios(apiUrls.CREATE_ENEMY(enemyData));
  }
}

export const Enemy = new EnemyService();