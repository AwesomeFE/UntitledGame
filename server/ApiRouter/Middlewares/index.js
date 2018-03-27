import { UserController } from '../../Controllers';

export const ensureSignIn = async (req, res, next) => {
  const { userId } = req.session;
  
  req.user = await UserController.findById(userId);
  next();
}