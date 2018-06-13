import { Types } from '../types/index.d';

export const apiUrls = {
  GET_ENEMY: () => ({
    method: 'get',
    url: '/api/enemy'
  }),
  GET_ENEMY_BY_ID: (enemyId: string) => ({
    method: 'get',
    url: `/api/enemy/${enemyId}`
  }),
  CREATE_ENEMY: (data: Types.FormData.Enemy) => ({
    method: 'post',
    url: `/api/enemy`,
    data
  }),
};