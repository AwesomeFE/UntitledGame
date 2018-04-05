import { Player } from '../../services';

export const actions = {
  async freshPlayerArray({ commit, state }) {
    const { data } = await Player.getPlayers();
    commit('freshPlayerArray', data);
  },
  async create({ commit, state }, playerData) {
    await Player.create(playerData);
  }
};