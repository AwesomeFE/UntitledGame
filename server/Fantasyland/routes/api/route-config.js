import * as UserRoutes from '../../../common/routes/UserRoutes';
import * as EnemyRoutes from './EnemyRoutes';
import * as PlayerRoutes from './PlayerRoutes';
import * as DungeonChapterRoutes from './DungeonChapterRoutes';
import middlewares from './middlewares';

export default [
  middlewares.setUser,
  middlewares.setPlayer,
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
  { path: '/dungeon-chapter', method: 'get', ...DungeonChapterRoutes.getAllDungeonChapters },
  // { path: '/dungeon/start', method: 'post', ...DungeonRoutes.startDungeon },

  // middlewares.ensureAdmin,
  // { path: '/dungeon', method: 'get', ...DungeonChapterRoutes.getAllDungeonChapters },
  { path: '/enemy', method: 'post', ...EnemyRoutes.createEnemy },
  { path: '/enemy', method: 'get', ...EnemyRoutes.getAllEnemy },
  { path: '/enemy/:enemyId', method: 'delete', ...EnemyRoutes.deleteEnemy },
  { path: '/dungeon-chapter', method: 'post', ...DungeonChapterRoutes.createDungeonChapter },
];
