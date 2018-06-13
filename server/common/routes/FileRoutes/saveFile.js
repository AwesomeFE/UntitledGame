import multer from 'multer';
import { File } from '../../models';
import { messages } from '../../constants';
// import { removeFieldsFromProjection } from '../../utils/dataFormat';

const upload = multer({ dest: 'uploads/Fantasyland/' });

class SaveFile {
  // required = {
  //   body: [
  //     'fileId'
  //   ]
  // };

  middleware = upload.single('file');

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const { user, body } = req;
    const userId = user._id;

    console.log(body);

    // const fileInfo = await File.findOne({ user: userId, _id: fileId });

    res.json(messages.REQUEST_SUCCESS());
  }
}

export const saveFile = new SaveFile();
