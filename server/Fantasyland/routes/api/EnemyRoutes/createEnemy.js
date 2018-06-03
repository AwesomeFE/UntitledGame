import multer from 'multer';
import { Enemy } from '../../../models';
import { messages } from '../../../../common/constants';
import { saveAllFieldFiles } from '../../../../common/utils/fs';

const upload = multer({ dest: 'uploads/Fantasyland/enemy/' });

class CreateEnemy {
  required = {
    body: [ 'name', 'gender' ]
  };

  middleware = upload.fields([
    { name: '2Dstanding', maxCount: 1 }
  ]);

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const { _id: userId } = req.user;
    const files = await saveAllFieldFiles(req.files, userId);
    const enemy = await this.createEnemyWithFiles(req.body, files);

    res.json(messages.REQUEST_SUCCESS(enemy && enemy.toJSON()));
  }

  async createEnemyWithFiles(enemyData, files = []) {
    for(const file of files) {
      const { fieldname, _id: fileId } = file;
      enemyData[fieldname] = fileId;
    }

    return await Enemy.create(enemyData);
  }
}

export const createEnemy = new CreateEnemy();