import { messages } from '../../Constants';

class BasicRouter {
  messages = messages;

  formatData(projectionStr, data) {
    const projections = projectionStr.split(' ');
    const formatedData = {...data.toJSON()};

    for(const projection of projections) {
      delete formatedData[projection];
    }

    return formatedData;
  }
}

export default BasicRouter;