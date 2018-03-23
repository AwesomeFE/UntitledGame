import { Vector3 } from "babylonjs";

export const mutations = {
  setResources(state, resources) {
    state.resources = resources;
  },

  moveResourceById(state, resourceId) {
    const currentResource = state.resources.find((resource) => resource.id === resourceId);

    if(currentResource) {
      currentResource.position = new Vector3(1, 0, 0);
    }
  }
};