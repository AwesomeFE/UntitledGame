export const mutations = {

  setDungeons(state, dungeonArray) {
    dungeonArray.map(dungeon => {
      dungeon.isShowLevels = false;
    });
    state.dungeonArray = dungeonArray;
  },

  toggleLevelsById(state, dungeonId) {
    state.dungeonArray.map(dungeon => {
      if(dungeon._id === dungeonId) {
        dungeon.isShowLevels = !dungeon.isShowLevels;
      }
    });
    // state.dungeonArray = state.dungeonArray;
  }

};