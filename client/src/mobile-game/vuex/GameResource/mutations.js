import { Vector3 } from "babylonjs";

export const mutations = {
  setResources(state, resources) {
    state.resources = resources;
  },

  moveResourceById(state, resourceId, position) {
    const currentResource = state.resources.find((resource) => resource.id === resourceId);

    if(currentResource) {
      currentResource.position = position;
    }
  }
};