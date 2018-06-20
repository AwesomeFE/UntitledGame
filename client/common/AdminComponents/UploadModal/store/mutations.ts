import { UploadModal } from './types.d';

import State = UploadModal.State;
import Payload = UploadModal.Payload;

export const mutations = {
  show(state: State) {
    state.isShow = true;
  },
  hide(state: State) {
    state.isShow = false;
  },
  addUploadFile(state: State, payload: Payload.UploadFile) {
    state.uploadFiles.push(payload);
  },
  updateProgress(state: State, payload: Payload.UploadFile) {
    const uploadFile = state.uploadFiles.find(
      uploadFile => uploadFile.name === payload.name && uploadFile.type === payload.type
    );

    uploadFile.status = payload.status;
  },
  finishUpload(state: State) {
    state.uploadFiles = state.uploadFiles.map(uploadFile => {
      
      uploadFile.status = 100;
      return uploadFile;
    })
  },
  clearUpload(state: State) {
    state.uploadFiles = [];
  }
};