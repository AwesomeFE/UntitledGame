export const apiUrls = {
  BASE_URL: () => {
    const SERVER_HOST = process.env.SERVER_HOST;
    const SERVER_PORT = process.env.SERVER_PORT;

    return `http://${SERVER_HOST}:${SERVER_PORT}/`;
  },
  SIGNIN: (data, params) => ({
    method: 'post',
    url: '/api/user/signin',
    data
  }),
  SIGNUP: (data, params) => ({
    method: 'post',
    url: '/api/user/signup',
    data
  }),
  GET_USER: (data, params) => ({
    method: 'get',
    url: '/api/user'
  }),
  SIGNOUT: () => ({
    method: 'get',
    url: '/api/user/signout'
  }),
  GET_PLAYERS: () => ({
    method: 'get',
    url: '/api/player'
  }),
  CREATE_PLAYER: (data) => ({
    method: 'post',
    url: '/api/player',
    data
  }),
  DELETE_PLAYER: (playerId) => ({
    method: 'delete',
    url: `/api/player/${playerId}`
  }),
  GET_DUNGEONS: () => ({
    method: 'get',
    url: '/api/dungeon'
  }),
  START_DUNGEONS_LEVEL: (playerId, dungeonId, levelIdx) => ({
    method: 'post',
    url: '/api/dungeon/start',
    data: { playerId, dungeonId, levelIdx }
  })
};