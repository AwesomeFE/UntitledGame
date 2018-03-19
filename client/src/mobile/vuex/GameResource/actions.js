import { Sheep } from '../../assets/game'
import { Vector3 } from 'babylonjs';

const materials = [
  [
    { id: 'sheep-1', name: '羊毛' },
    { id: 'sheep-2', name: '羊毛' },
    { id: 'sheep-3', name: '羊毛' }
  ],
  [
    { id: 'sheep-4', name: '羊毛' },
    { id: 'sheep-5', name: '羊毛' },
    { id: 'sheep-6', name: '羊毛' }
  ],
  [
    { id: 'sheep-7', name: '羊毛' },
    { id: 'sheep-8', name: '羊毛' },
    { id: 'sheep-9', name: '羊毛' }
  ]
];

const positions = [
  new Vector3((Math.random() - 0.5) * 4, 0, (Math.random() - 0.5) * 4),
  new Vector3((Math.random() - 0.5) * 4, 0, (Math.random() - 0.5) * 4),
  new Vector3((Math.random() - 0.5) * 4, 0, (Math.random() - 0.5) * 4)
];

const scaling = new Vector3(1, 1, 1);

const rotation = [
  new Vector3(0, Math.PI * 2 * Math.random(), 0),
  new Vector3(0, Math.PI * 2 * Math.random(), 0),
  new Vector3(0, Math.PI * 2 * Math.random(), 0)
];

const resources = [
  {
    id: '羊-1',
    name: '羊',
    materials: materials[0],
    url: Sheep.SheepBabylon,
    scaling,
    rotation: rotation[0],
    position: positions[0],
    from: positions[0],
    to: positions[0],
    speed: 1
  },
  // { id: '羊-2', name: '羊', materials: materials[2], url: Sheep.SheepBabylon, position: positions[1], scaling, rotation: rotation[1] },
  // { id: '羊-3', name: '羊', materials: materials[3], url: Sheep.SheepBabylon, position: positions[2], scaling, rotation: rotation[2] }
];

export const actions = {
  getResources({ commit, state }) {
    commit('setResources', resources);
  }
};
