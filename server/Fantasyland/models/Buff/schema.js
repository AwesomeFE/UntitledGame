import { Schema } from 'mongoose';

const BuffSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  tip: {
    type: String
  },
  recover: {
    type: String
  },
  total: {
    type: Number
  },
  isIncrease: {
    type: Boolean
  },
  maintain: {
    type: Number
  },
  resources: {
    thumbnail: {
      type: String
    }
  },
}, {timestamps: true});

export default BuffSchema;