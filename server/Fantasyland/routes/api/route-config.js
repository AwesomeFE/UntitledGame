import * as UserRoutes from '../../../common/routes/UserRoutes';
import * as PlayerRoutes from './PlayerRoutes';
import * as DungeonRoutes from './DungeonRoutes';
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
  { path: '/player/:playerId', method: 'get', ...PlayerRoutes.loginPlayer },
  { path: '/player/:playerId/logout', method: 'get', ...PlayerRoutes.logoutPlayer },
  { path: '/player/:playerId', method: 'patch', ...PlayerRoutes.patchPlayer },
  { path: '/player/:playerId', method: 'delete', ...PlayerRoutes.deletePlayer },
  middlewares.ensurePlayerLogin,
  { path: '/dungeon', method: 'get', ...DungeonRoutes.getAllDungeons },
  // { path: '/dungeon/start', method: 'post', ...DungeonRoutes.startDungeon },
  // middlewares.ensureAdmin,
  { path: '/dungeon', method: 'post', ...DungeonRoutes.createDungeon },
];
