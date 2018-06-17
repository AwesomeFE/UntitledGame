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
  ENEMY_EDIT: (enemyId: string): RawLocation => ({
    path: '/enemy/:enemyId',
    params: {
      enemyId
    }
  })
};