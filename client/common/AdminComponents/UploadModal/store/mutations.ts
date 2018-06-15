import { UploadModal } from './types.d';

import State = UploadModal.State;
import Payload = UploadModal.Payload.UploadFile;

export const mutations = {
  show(state: State) {
    state.isShow = true;
  },
  hide(state: State) {
    state.isShow = false;
  },
  addUploadFile(state: State, payload: Payload) {
    state.uploadFiles.push(payload);
  },
  updateProgress(state: State, payload: Payload) {
    const uploadFile = state.uploadFiles.find(uploadFile => uploadFile.id === payload.id);

    uploadFile.status = payload.status;
  },
  finishUpload(state: State, payload: Payload) {
    state.uploadFiles = state.uploadFiles.map(uploadFile => {
      
      uploadFile.status = 100;
      return uploadFile;
    })
  }
};