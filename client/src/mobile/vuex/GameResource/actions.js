import { Sheep } from '../../assets/game'
import { Vector3 } from 'babylonjs';

const resources = [];

for(let i = 0; i < 5; i++) {
  resources.push({
    id: `羊-${i}`,
    name: '羊',
    materials: [
      { id: `羊毛-${i}`, name: '羊毛' }
    ],
    url: Sheep.SheepBabylon,
    scaling: new Vector3(0.3, 0.3, 0.3),
    rotation: new Vector3(0, Math.PI * 2 * Math.random(), 0),
    ellipsoidOffset: new Vector3(0, 1, 0),
    speed: 8
  });
}

export const actions = {
  getResources({ commit, state }) {
    commit('setResources', resources);
  }
};