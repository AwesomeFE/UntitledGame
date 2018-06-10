import { Store } from '../types';

export const apiUrls = {
  GET_ENEMY: () => ({
    method: 'get',
    url: '/api/enemy'
  }),
  GET_ENEMY_BY_ID: (enemyId: string) => ({
    method: 'get',
    url: `/api/enemy/${enemyId}`
  }),
};