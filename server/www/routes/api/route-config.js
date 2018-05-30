import * as UserRoutes from '../../../common/routes/UserRoutes';
import middlewares from './middlewares';

export default [
  middlewares.setUser,
  { path: '/user/signin', method: 'post', ...UserRoutes.signIn },
  { path: '/user/signup', method: 'post', ...UserRoutes.signUp },
  { path: '/user', method: 'get', ...UserRoutes.getSessionUser },
  middlewares.ensureSignIn,
  { path: '/user/signout', method: 'get', ...UserRoutes.signOut },
];