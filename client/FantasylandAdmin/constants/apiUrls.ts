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
  GET_BUFF: () => ({
    method: 'get',
    url: '/api/buff'
  }),
  GET_BUFF_BY_ID: (buffId: string) => ({
    method: 'get',
    url: `/api/buff/${buffId}`
  }),
  CREATE_BUFF: (data: Models.Buff.Model) => ({
    method: 'post',
    url: `/api/buff`,
    data
  }),
  UPDATE_BUFF: (data: Models.Buff.Model) => ({
    method: 'patch',
    url: `/api/buff`,
    data
  }),
};