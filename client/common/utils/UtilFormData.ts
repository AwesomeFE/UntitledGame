interface FieldFiles {
  [key: string]: File
}

export const UtilFormData = {
  transformFieldFilesToFormDataArray(fieldFiles: FieldFiles): Array<FormData> {
    const formDataArray = [];

    for(const fieldName in fieldFiles) {
      const formData = new FormData();
      formData.append(fieldName, fieldFiles[fieldName]);
      formDataArray.push(formData)
    }

    return formDataArray;
  }
};
