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
  { x: (Math.random() - 0.5) * 8, y: 1, z: (Math.random() - 0.5) * 8 },
  { x: (Math.random() - 0.5) * 8, y: 1, z: (Math.random() - 0.5) * 8 },
  { x: (Math.random() - 0.5) * 8, y: 1, z: (Math.random() - 0.5) * 8 }
];

const resources = [
  { id: '羊-1', name: '羊', materials: materials[0], width: 2, height: 2, position: positions[0] },
  { id: '羊-2', name: '羊', materials: materials[2], width: 2, height: 2, position: positions[1] },
  { id: '羊-3', name: '羊', materials: materials[3], width: 2, height: 2, position: positions[2] }
];

export const actions = {
  getResources({ commit, state }) {
    commit('setResources', resources);
  }
};
