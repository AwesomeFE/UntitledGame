import { Models } from '../types';

export const apiUrls = {
  GET_ENEMY: () => ({
    method: 'get',
    url: '/api/enemy'
  }),
  GET_ENEMY_BY_ID: (enemyId: string) => ({
    method: 'get',
    url: `/api/enemy/${enemyId}`
  }),
  CREATE_ENEMY: (data: Models.Enemy.Model) => ({
    method: 'post',
    url: `/api/enemy`,
    data
  }),
  UPDATE_ENEMY: (data: Models.Enemy.Model) => ({
    method: 'patch',
    url: `/api/enemy`,
    data
  }),
};