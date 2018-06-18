import { Enemy, File } from '../../../models';
import { messages } from '../../../../common/constants';

class UpdateEnemy {
  required = {
    body: [ '_id' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const oldEnemy = await Enemy.findByIdAndUpdate(req.body._id, req.body);
    const newEnemy = await Enemy.findById(req.body._id);

    this.removeUnusedFiles(oldEnemy, newEnemy);

    res.json(messages.REQUEST_SUCCESS());
  }

  removeUnusedFiles(oldEnemy, newEnemy) {
    const oldResources = oldEnemy.resources;
    const newResources = newEnemy.resources;

    for(const key in oldResources) {
      if(oldResources[key] !== newResources[key]) {
        File.removeByFilePath(oldResources[key]);
      }
    }
  }
}

export const updateEnemy = new UpdateEnemy();