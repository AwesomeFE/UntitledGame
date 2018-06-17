import { Utils } from './types.d';

import FieldFiles = Utils.FormFile.FieldFiles;

export const UtilFormFile = {
  getFormDatasFromFieldFiles(fieldFiles: FieldFiles, type?: string) {
    const formDatas = [];

    for(const fieldName in fieldFiles) {
      const fieldFile = fieldFiles[fieldName];
      
      if(fieldFile) {
        const formData = new FormData();
        
        formData.append('name', fieldName);
        formData.append('file', fieldFile);
        formData.append('type', type || '');
        
        formDatas.push(formData);
      }
    }

    return formDatas;
  }
};