import { CommonTypes } from '../../types';

export const mutations = {
  /**
   * 向Store中设置用户数据
   * @param state 
   * @param user 
   */
  setUser(state: CommonTypes.Store.System.State, user: CommonTypes.Store.System.User) {
    state.user = user;
  },
  /**
   * 向Store中注册某个类型的模态框数据
   * @param state 
   * @param type 
   * 注：可以允许重复注册模态框，由于hot-replace是先挂载新组件，后删除旧组件。
   */
  registerModal(state: CommonTypes.Store.System.State, payload: CommonTypes.Store.System.Modal) {
    const modalInitState: CommonTypes.Store.System.Modal = { 
      type: payload.type,
      isShow: false
    };

    for(const key in payload) {
      key !== 'type' ? modalInitState[key] = payload[key] : null;
    }
    state.modals.push(modalInitState);
  },
  /**
   * 向Store中销毁某个类型的模态框数据
   * @param state 
   * @param type 
   */
  destoryModal(state: CommonTypes.Store.System.State, payload: CommonTypes.Store.System.Modal) {
    const modalIndex = state.modals.findIndex(modalItem => modalItem.type === payload.type);
    state.modals.splice(modalIndex, 1);
  },
  /**
   * 显示某个类型的模态框
   * @param state 
   * @param type 
   */
  showModal(state: CommonTypes.Store.System.State, payload: CommonTypes.Store.System.Modal) {
    const modal = state.modals.find(modalItem => modalItem.type === payload.type);
    if(modal) {
      for(const key in payload) {
        key !== 'type' ? modal[key] = payload[key] : null;
      }
      modal.isShow = true;
    }
  },
  /**
   * 隐藏某个类型的模态框
   * @param state 
   * @param type 
   */
  hideModal(state: CommonTypes.Store.System.State, payload: CommonTypes.Store.System.Modal) {
    const modal = state.modals.find(modalItem => modalItem.type === payload.type);
    if(modal) {
      modal.isShow = false;
    }
  }
};