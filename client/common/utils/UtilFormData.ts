interface FormJson {
  [key: string]: any;
}

interface FieldFiles {
  [key: string]: File
}

export const UtilFormData = {
  mergeFileToFormJson(formJson: FormJson, fieldFiles: FieldFiles): FormJson {
    const newFormJson = JSON.parse(JSON.stringify(formJson));
    
    for(const fieldName in fieldFiles) {
      if(fieldName in newFormJson) {
        newFormJson[fieldName] = fieldFiles[fieldName];
      }
    }
  
    return newFormJson;
  },

  transformJsonToFormData(formJson: FormJson): FormData {
    const formData = new FormData();

    for(const fieldName in formJson) {
      formData.append(fieldName, formJson[fieldName]);
    }

    return formData;
  }
};
