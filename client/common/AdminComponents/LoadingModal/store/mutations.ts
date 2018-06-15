import { LoadingModal } from './types.d';

import State = LoadingModal.State;

export const mutations = {
  show(state: State) {
    state.isShow = true;
  },
  hide(state: State) {
    state.isShow = false;
  },
};