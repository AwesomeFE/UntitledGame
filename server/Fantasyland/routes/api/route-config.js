import * as UserRoutes from '../../../common/routes/UserRoutes';
import * as FileRoutes from '../../../common/routes/FileRoutes';
import * as BuffRoutes from './BuffRoutes';
import * as EnemyRoutes from './EnemyRoutes';
import * as PlayerRoutes from './PlayerRoutes';
import * as DungeonRoutes from './DungeonRoutes';
import middlewares from './middlewares';

export default [
  middlewares.setUser,
  middlewares.setPlayer,
  { path: '/user/signin', method: 'post', ...UserRoutes.signIn },
  { path: '/user/signup', method: 'post', ...UserRoutes.signUp },
  { path: '/user', method: 'get', ...UserRoutes.getSessionUser },
  middlewares.ensureSignIn,
  { path: '/user/signout', method: 'get', ...UserRoutes.signOut },
  { path: '/file/:fileId', method: 'get', ...FileRoutes.getFile },
  { path: '/player', method: 'get', ...PlayerRoutes.getUserAllPlayers },
  { path: '/player', method: 'post', ...PlayerRoutes.createPlayer },
  { path: '/player/:playerId', method: 'get', ...PlayerRoutes.loginPlayer },
  { path: '/player/:playerId/logout', method: 'get', ...PlayerRoutes.logoutPlayer },
  { path: '/player/:playerId', method: 'patch', ...PlayerRoutes.patchPlayer },
  { path: '/player/:playerId', method: 'delete', ...PlayerRoutes.deletePlayer },
  middlewares.ensurePlayerLogin,
  { path: '/dungeon-chapter', method: 'get', ...DungeonRoutes.getAllDungeonChapters },
  { path: '/dungeon/:dungeonBattleId/start', method: 'get', ...DungeonRoutes.startDungeonBattle },
  { path: '/file', method: 'post', ...FileRoutes.saveFile },

  // middlewares.ensureAdmin,
  // { path: '/dungeon', method: 'get', ...DungeonChapterRoutes.getAllDungeonChapters },
  { path: '/enemy', method: 'post', ...EnemyRoutes.create },
  { path: '/enemy', method: 'patch', ...EnemyRoutes.update },
  { path: '/enemy', method: 'get', ...EnemyRoutes.getAll },
  { path: '/enemy/:enemyId', method: 'get', ...EnemyRoutes.getById },
  { path: '/enemy/:enemyId', method: 'delete', ...EnemyRoutes.delete },

  { path: '/buff', method: 'post', ...BuffRoutes.create },
  { path: '/buff', method: 'patch', ...BuffRoutes.update },
  { path: '/buff', method: 'get', ...BuffRoutes.getAll },
  { path: '/buff/:buffId', method: 'get', ...BuffRoutes.getById },
  { path: '/buff/:buffId', method: 'delete', ...BuffRoutes.remove },

  { path: '/dungeon-chapter', method: 'post', ...DungeonRoutes.createDungeonChapter },
];
