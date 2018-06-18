import axios, { AxiosResponse } from 'axios';
import EnemyTypes from './types.d';
import { apiUrls } from '../../constants';

class EnemyService {
  getEnemy(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_ENEMY());
  }

  getEnemyById(enemyId: string): Promise<AxiosResponse> {
    return axios(apiUrls.GET_ENEMY_BY_ID(enemyId));
  }

  createEnemy(enemyData: EnemyTypes.Model): Promise<AxiosResponse> {
    delete enemyData._id;
    return axios(apiUrls.CREATE_ENEMY(enemyData));
  }

  updateEnemy(enemyData: EnemyTypes.Model): Promise<AxiosResponse> {
    return axios(apiUrls.UPDATE_ENEMY(enemyData));
  }
}

export const Enemy = new EnemyService();