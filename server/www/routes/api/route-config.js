import * as UserRoutes from './UserRoutes';
import middlewares from './middlewares';

export default [
  middlewares.setUser,
  { path: '/user/signin', method: 'post', ...UserRoutes.SignIn },
  { path: '/user/signup', method: 'post', ...UserRoutes.SignUp },
  { path: '/user', method: 'get', ...UserRoutes.GetSessionUser },
  middlewares.ensureSignIn,
  { path: '/user/signout', method: 'get', ...UserRoutes.SignOut }
];