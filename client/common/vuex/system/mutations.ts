import { Store } from '../../types';

export const mutations = {
  setUser(state: Store.System.State, user: Store.System.User) {
    state.user = user;
  },
  registerModal(state: Store.System.State, type: string) {
    const isModalExisted = state.modals.some(modalItem => modalItem.type === type);
    
    !isModalExisted
      ? state.modals.push({ type, isShow: false })
      : console.warn(`Modal '${type}' is existed! Regist failed.`);
  },
  showModal(state: Store.System.State, type: string) {
    const modal = state.modals.find(modalItem => modalItem.type === type);
    modal.isShow = true;
  },
  hideModal(state: Store.System.State, type: string) {
    const modal = state.modals.find(modalItem => modalItem.type === type);
    modal.isShow = false;
  }
};