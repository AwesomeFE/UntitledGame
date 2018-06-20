/// <reference types="node" />

import { RawLocation } from 'vue-router';

export const linkUrls = {
  BASE_URL: () => {
    const SERVER_HOST = process.env.SERVER_HOST;
    const SERVER_PORT = process.env.SERVER_PORT;

    return `http://${SERVER_HOST}:${SERVER_PORT}/`;
  },
  HOME: () => ({
    path: '/'
  }),
  SIGNIN: (): RawLocation => ({
    path: '/signin'
  }),
  ENEMY_LIST: (): RawLocation => ({
    path: '/enemy'
  }),
  ENEMY_EDIT: (id: string): RawLocation => ({
    path: `/enemy/${id}`
  }),
  BUFF_LIST: (): RawLocation => ({
    path: '/buff'
  }),
  BUFF_EDIT: (id: string): RawLocation => ({
    path: `/buff/${id}`
  }),
  CONSUMABLE_LIST: (): RawLocation => ({
    path: '/consumable'
  }),
  CONSUMABLE_EDIT: (id: string): RawLocation => ({
    path: `/consumable/${id}`
  })
};