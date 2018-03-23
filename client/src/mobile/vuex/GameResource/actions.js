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

const ellipsoidOffset = new Vector3(0, 1, 0);

const positions = [
  new Vector3((Math.random() - 0.5) * 4, 1, (Math.random() - 0.5) * 4),
  new Vector3((Math.random() - 0.5) * 4, 0, (Math.random() - 0.5) * 4),
  new Vector3((Math.random() - 0.5) * 4, 0, (Math.random() - 0.5) * 4),
  new Vector3((Math.random() - 0.5) * 4, 0, (Math.random() - 0.5) * 4),
  new Vector3((Math.random() - 0.5) * 4, 0, (Math.random() - 0.5) * 4),
  new Vector3((Math.random() - 0.5) * 4, 0, (Math.random() - 0.5) * 4)
];

const scaling = new Vector3(0.3, 0.3, 0.3);

const rotation = [
  new Vector3(0, Math.PI * 2 * Math.random(), 0),
  new Vector3(0, Math.PI * 2 * Math.random(), 0),
  new Vector3(0, Math.PI * 2 * Math.random(), 0),
  new Vector3(0, Math.PI * 2 * Math.random(), 0),
  new Vector3(0, Math.PI * 2 * Math.random(), 0),
  new Vector3(0, Math.PI * 2 * Math.random(), 0),
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
    ellipsoidOffset,
    speed: 1
  },
  { id: '羊-2', name: '羊', materials: materials[2], url: Sheep.SheepBabylon, position: positions[1], scaling, rotation: rotation[1], ellipsoidOffset, speed: 1 },
  { id: '羊-3', name: '羊', materials: materials[3], url: Sheep.SheepBabylon, position: positions[2], scaling, rotation: rotation[2], ellipsoidOffset, speed: 1 },
  { id: '羊-4', name: '羊', materials: materials[3], url: Sheep.SheepBabylon, position: positions[3], scaling, rotation: rotation[3], ellipsoidOffset, speed: 1 },
  { id: '羊-5', name: '羊', materials: materials[3], url: Sheep.SheepBabylon, position: positions[4], scaling, rotation: rotation[4], ellipsoidOffset, speed: 1 },
  { id: '羊-6', name: '羊', materials: materials[3], url: Sheep.SheepBabylon, position: positions[5], scaling, rotation: rotation[5], ellipsoidOffset, speed: 1 },
];

export const actions = {
  getResources({ commit, state }) {
    commit('setResources', resources);
  }
};
