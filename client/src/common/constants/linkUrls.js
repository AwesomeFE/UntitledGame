export const linkUrls = {
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
    path: '/game/player/creator'
  }),
  GAME_HOME: (playerId) => ({
    path: `/game/${playerId}`
  }),
  GAME_RESOURCE: (playerId) => ({
    path: `/game/${playerId}/resource`
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