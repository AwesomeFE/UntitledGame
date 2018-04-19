export const linkUrls = {
  BASE_URL: () => {
    const SERVER_HOST = process.env.SERVER_HOST;
    const SERVER_PORT = process.env.SERVER_PORT;

    return `http://${SERVER_HOST}:${SERVER_PORT}/`;
  },
  HOME: () => ({
    path: '/'
  }),
  CART: () => ({
    path: '/cart'
  }),
  GAME_START_LINK: () => ({
    path: '/game/startLink'
  }),
  GAME_PLAYER: () => ({
    path: '/game/player'
  }),
  GAME_PLAYER_CREATOR: () => ({
    path: '/game/player/new'
  }),
  GAME_HOME: (playerId) => ({
    path: `/game/${playerId}`
  }),
  GAME_RESOURCE: (playerId) => ({
    path: `/game/${playerId}/resource`
  }),
  GAME_DUNGEON: (playerId) => ({
    path: `/game/${playerId}/dungeon`
  }),
  GAME_DUNGEON_LEVEL: (playerId, dungeonId, levelIdx) => ({
    path: `/game/${playerId}/dungeon/${dungeonId}/level/${levelIdx}`
  }),
  SIGNIN: () => ({
    path: '/entry',
    query: { type: 'signin' }
  }),
  SIGNUP: () => ({
    path: '/entry',
    query: { type: 'signup' }
  })
};