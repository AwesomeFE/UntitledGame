import UserRouter from './UserRouter';
import EnemyRouter from './EnemyRouter';
import PlayerRouter from './PlayerRouter';
import DungeonRouter from './DungeonRouter';
import middlewares from './Middlewares';

export default [
  middlewares.setUser,
  { path: '/user/signin', method: 'post', ...UserRouter.signIn },
  { path: '/user/signup', method: 'post', ...UserRouter.signUp },
  { path: '/user', method: 'get', ...UserRouter.getSessionUser },
  middlewares.ensureSignIn,
  { path: '/user/signout', method: 'get', ...UserRouter.signout },
  { path: '/player', method: 'get', ...PlayerRouter.getPlayers },
  { path: '/player', method: 'post', ...PlayerRouter.create },
  { path: '/player/:playerId', method: 'delete', ...PlayerRouter.deletePlayer },
  { path: '/dungeon', method: 'get', ...DungeonRouter.getAllDungeons },
  { path: '/dungeon/start', method: 'post', ...DungeonRouter.startDungeonLevel },
  // middlewares.ensureAdmin,
  { path: '/dungeon', method: 'post', ...DungeonRouter.createDungeon },
  { path: '/enemy', method: 'get', ...EnemyRouter.getAllEnemys },
  { path: '/enemy', method: 'post', ...EnemyRouter.createEnemy },
];