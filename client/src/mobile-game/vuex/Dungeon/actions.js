import { Dungeon } from '../../services';

export const actions = {
  async getAllDungeons({ commit, state }) {
    const { data } = await Dungeon.getDungeons();
    commit('setDungeons', data);
  }
};