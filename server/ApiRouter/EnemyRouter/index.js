import multer from 'multer';
import BasicRouter from '../BasicRouter';
import { EnemyController, FileController } from '../../Controllers';
import { Promise } from 'mongoose';

class EnemyRouter extends BasicRouter {
  getAllEnemys = {
    validate: (req, res) => {},
    handler: async (req, res) => {
      const { messages } = this;

      const conditions = {};
      const enemys = await EnemyController.find(conditions);

      res.json(messages.REQUEST_SUCCESS(enemys));
    }
  };

  createEnemy = {
    required: {
      body: [
        'name', 'level'
      ]
    },
    middleware: multer({ dest: 'uploads/emenys' }).fields([
      { name: 'url2D', maxCount: 1 },
      { name: 'url3D', maxCount: 1 }
    ]),
    validate: (req, res) => {},
    handler: async (req, res) => {
      const { messages } = this;
      const { body, files } = req;

      const fileProcessor = [
        files.url2D && FileController.create(files.url2D[0]),
        files.url3D && FileController.create(files.url3D[0])
      ].filter(processor => !!processor);

      const [ file2D = {}, file3D = {} ] = await Promise.all(fileProcessor);

      req.body.url2D = file2D.path;
      req.body.url3D = file3D.path;

      const enemy = await EnemyController.create(req.body);

      res.json(messages.REQUEST_SUCCESS(enemy));
    }
  };
}

export default new EnemyRouter();
