import { UploadModal } from './types.d';
import { File } from '../../../services';

import Context = UploadModal.Context;

export const actions = {
  async uploadFiles(context: Context, payload: Array<FormData>) {
    const { commit } = context;

    for(const formData of payload) {
      commit('addUploadFile', {
        type: formData.get('type'),
        name: formData.get('name'),
        status: 0
      });
    }

    const fileUploaders = payload.map(formData => {
      return File.uploadFile(
        formData,
        event => commit('updateProgress', {
          type: formData.get('type'),
          name: formData.get('name'),
          status: event.loaded / event.total * 100
        }));
    });

    const results = await Promise.all(fileUploaders);
    
    commit('finishUpload');

    return results;
  },
};