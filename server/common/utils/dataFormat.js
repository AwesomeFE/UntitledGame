export function projectionFormat(projectionStr, data) {
  const projections = projectionStr.split(' ');
  const formatedData = {...data.toJSON ? data.toJSON() : data};

  for(const projection of projections) {
    delete formatedData[projection];
  }

  return formatedData;
}