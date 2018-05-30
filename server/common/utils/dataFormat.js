export function removeFieldsFromProjection(projectionStr, data) {
  const projections = projectionStr ? projectionStr.split(' ') : [];
  const formatedData = {...data.toJSON ? data.toJSON() : data};

  for(const projection of projections) {
    delete formatedData[projection];
  }

  return formatedData;
}

export function getFieldsFromProjection(projectionStr, data) {
  const projections = projectionStr ? projectionStr.split(' ') : [];
  const formatedData = {...data.toJSON ? data.toJSON() : data};

  for(const fieldKey in formatedData) {
    if(!projections.includes(fieldKey)) {
      delete formatedData[fieldKey];
    }
  }

  return formatedData;
}