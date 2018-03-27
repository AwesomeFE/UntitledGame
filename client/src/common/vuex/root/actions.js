import { User } from '../../services';

export const actions = {
  async getUser({ commit, state }) {
    const user = await User.getSessionUser();
    console.log(user)
  }
};
