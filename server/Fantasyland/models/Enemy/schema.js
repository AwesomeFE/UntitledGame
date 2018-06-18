import { Schema } from 'mongoose';

const EnemySchema = new Schema({
  description: {
    type: String
  },
  resources: {
    standing2D: {
      type: String
    },
  },
}, {timestamps: true});

export default EnemySchema;