import { CommonTypes } from '../../types';

export const mutations = {
  /**
   * 向Store中注册某个类型的模态框数据
   * @param state 
   * @param type 
   * 注：可以允许重复注册模态框，由于hot-replace是先挂载新组件，后删除旧组件。
   */
  registerModal(state: CommonTypes.Store.Modal.State, payload: CommonTypes.Store.Modal.Payload) {
    const initialState: CommonTypes.Store.Modal.Payload = {
      isShow: false
    };

    // state[payload.type] = initialState;
  },
};