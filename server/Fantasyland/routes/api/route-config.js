import * as UserRoutes from '../../../common/routes/UserRoutes';
import * as PlayerRoutes from './PlayerRoutes';
import middlewares from './middlewares';

export default [
  middlewares.setUser,
  { path: '/user/signin', method: 'post', ...UserRoutes.signIn },
  { path: '/user/signup', method: 'post', ...UserRoutes.signUp },
  { path: '/user', method: 'get', ...UserRoutes.getSessionUser },
  middlewares.ensureSignIn,
  { path: '/user/signout', method: 'get', ...UserRoutes.signOut },
  { path: '/player', method: 'get', ...PlayerRoutes.getUserAllPlayers },
  { path: '/player', method: 'post', ...PlayerRoutes.createPlayer },
  { path: '/player/:playerId', method: 'get', ...PlayerRoutes.getPlayer },
  { path: '/player/:playerId', method: 'patch', ...PlayerRoutes.patchPlayer },
  { path: '/player/:playerId', method: 'delete', ...PlayerRoutes.deletePlayer },
];