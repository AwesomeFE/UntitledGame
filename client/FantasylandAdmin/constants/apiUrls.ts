import { Models } from '../types';

export const apiUrls = {
  GET_ENEMY: () => ({
    method: 'get',
    url: '/api/enemy'
  }),
  GET_ENEMY_BY_ID: (id: string) => ({
    method: 'get',
    url: `/api/enemy/${id}`
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
  GET_BUFF_BY_ID: (id: string) => ({
    method: 'get',
    url: `/api/buff/${id}`
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
  GET_CONSUMABLE: () => ({
    method: 'get',
    url: '/api/consumable'
  }),
  GET_CONSUMABLE_BY_ID: (id: string) => ({
    method: 'get',
    url: `/api/consumable/${id}`
  }),
  CREATE_CONSUMABLE: (data: Models.Consumable.Model) => ({
    method: 'post',
    url: `/api/consumable`,
    data
  }),
  UPDATE_CONSUMABLE: (data: Models.Consumable.Model) => ({
    method: 'patch',
    url: `/api/consumable`,
    data
  }),
};