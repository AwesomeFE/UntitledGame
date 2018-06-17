import multer from 'multer';
import { File } from '../../models';
import { messages } from '../../constants';

const upload = multer({ dest: 'uploads/Fantasyland/' });

class SaveFile {
  middleware = upload.single('file');

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  async validate(req, res) {}

  async handler(req, res) {
    const { user, body, file } = req;
    const userId = user._id;

    const fileInfo = await File.create({ user: userId, ...file });

    res.json(messages.REQUEST_SUCCESS(fileInfo.path));
  }
}

export const saveFile = new SaveFile();
