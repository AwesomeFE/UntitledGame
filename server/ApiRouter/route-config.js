import UserRouter from './UserRouter';
import PlayerRouter from './PlayerRouter';
import * as middlewares from './Middlewares';

export default [
  { path: '/user/signin', method: 'post', ...UserRouter.signIn },
  { path: '/user/signup', method: 'post', ...UserRouter.signUp },
  middlewares.ensureSignIn,
  { path: '/user', method: 'get', ...UserRouter.getSessionUser },
  { path: '/player', method: 'post', ...PlayerRouter.create }
];