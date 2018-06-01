/**
 * 去掉数据对象中，在projection出现过的字段
 * @param {*} projectionStr 
 * @param {*} data 
 */
export function removeFieldsFromProjection(projectionStr, data) {
  const projections = projectionStr ? projectionStr.split(' ') : [];
  const formatedData = {...data.toJSON ? data.toJSON() : data};

  for(const projection of projections) {
    delete formatedData[projection];
  }

  return formatedData;
}

/**
 * 保留数据对象中，在projection出现过的字段
 * @param {*} projectionStr 
 * @param {*} data 
 */
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

/**
 * 根据对象池中的概率，从对象池中拿取一个项
 * @param {*} poolArray 
 */
export function generateItemFromPool(poolArray = []) {
  let seed = 0;
  let location = Math.random();

  for(const poolItem of poolArray) {
    const minProbability = seed;
    const maxProbability = seed + poolItem.probability;

    if(minProbability <= location && maxProbability >= location) {
      delete poolItem.probability;
      return poolItem.item;
    } else {
      seed += poolItem.probability;
    }
  }
}