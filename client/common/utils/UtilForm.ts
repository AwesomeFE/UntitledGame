import { Utils } from './types.d';

import FieldFiles = Utils.FormFile.FieldFiles;

export const UtilForm = {
  getKey(args: IArguments) {
    const keys: Array<string> = [];

    for(let i = 0; i < args.length; i++) {
      const argument = args[i];

      keys.push(argument);
    }

    return keys.join('_');
  },

  getFileArrayFromFieldFiles(fieldFiles: FieldFiles, type?: string) {
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
}