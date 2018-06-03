import { Schema } from 'mongoose';

const FileSchema = new Schema({
  fieldname: {
    type: String
  },
  originalname: {
    type: String
  },
  encoding: {
    type: String
  },
  mimetype: {
    type: String
  },
  destination: {
    type: String
  },
  filename: {
    type: String
  },
  path: {
    type: String
  },
  size: {
    type: Number
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
}, {timestamps: true});

export default FileSchema;