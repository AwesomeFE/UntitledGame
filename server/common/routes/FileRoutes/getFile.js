import { File } from '../../models';
import { messages } from '../../constants';
import { removeFieldsFromProjection } from '../../utils/dataFormat';

class GetFile {
  required = {
    params: [
      'fileId'
    ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const { user, params } = req;
    const fileId = params.fileId;
    const userId = user._id;

    const fileInfo = await File.findOne({ user: userId, _id: fileId });

    res.json(messages.REQUEST_SUCCESS(fileInfo));
  }
}

export const getFile = new GetFile();