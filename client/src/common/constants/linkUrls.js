export const linkUrls = {
  HOME: {
    path: '/'
  },
  CART: {
    path: 'cart'
  },
  GAME: {
    path: 'gameHome'
  },
  SIGNIN: {
    path: 'entry',
    query: { type: 'signin' }
  },
  SIGNUP: {
    path: 'entry',
    query: { type: 'signup' }
  },
  SIGNOUT: {
    path: 'api/user/signout',
  }
};