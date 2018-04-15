import { Schema } from 'mongoose';
import StageSchema from './stageSchema';

const LevelSchema = new Schema({
  name: {
    type: String
  },
  order: {
    type: Number
  },
  stages: [{
    type: StageSchema
  }],
  prize: [{
    type: Schema.Types.ObjectId,
    ref: 'items'
  }]
}, {timestamps: true});

export default LevelSchema;