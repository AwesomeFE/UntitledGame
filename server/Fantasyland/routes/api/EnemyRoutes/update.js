import { Enemy, File } from '../../../models';
import { messages } from '../../../../common/constants';

class Update {
  required = {
    body: [ '_id' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const oldDoc = await Enemy.findByIdAndUpdate(req.body._id, req.body);
    const newDoc = await Enemy.findById(req.body._id);

    this.removeUnusedFiles(oldDoc, newDoc);

    res.json(messages.REQUEST_SUCCESS());
  }

  removeUnusedFiles(oldDoc, newDoc) {
    const oldResources = oldEnemy.resources;
    const newResources = newEnemy.resources;

    for(const key in oldResources) {
      if(oldResources[key] !== newResources[key]) {
        File.removeByFilePath(oldResources[key]);
      }
    }
  }
}

export const update = new Update();