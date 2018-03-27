import { UserController } from '../../Controllers';

export const ensureSignIn = (req, res, next) => {
  console.log(req.session)

  next();
}