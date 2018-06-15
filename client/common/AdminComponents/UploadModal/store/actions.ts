import { UploadModal } from './types.d';
import { File } from '../../../services';

import Context = UploadModal.Context;

export const actions = {
  async uploadFiles(context: Context, payload: Array<FormData>) {
    const { commit } = context;

    payload.forEach((formData, index) => commit('addUploadFile', {
      id: formData.get('id'),
      name: formData.get('name'),
      field: formData.get('field'),
      status: 0
    }));

    const fileUploaders = payload.map(formData => 
      File.uploadFile(formData, progress => commit('updateProgress', progress))
    );

    const results = await Promise.all(fileUploaders);
    
    commit('finishUpload', results);
  },
};