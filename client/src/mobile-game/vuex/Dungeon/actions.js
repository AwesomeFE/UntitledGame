import { Dungeon } from '../../services';

export const actions = {
  async getAllDungeons({ commit, state }) {
    const { data } = await Dungeon.getDungeons();
    commit('setDungeons', data);
  },
  async startLevel({ commit, state }, { playerId, dungeonId, levelIdx }) {
    const { data } = await Dungeon.startLevel(playerId, dungeonId, levelIdx);
    commit('setBattles', data);
  }
};