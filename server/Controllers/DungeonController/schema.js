import { Schema } from 'mongoose';
import LevelSchema from './levelSchema';

const DungeonSchema = new Schema({
  name: {
    type: String
  },
  order: {
    type: Number
  },
  type: {
    type: String,
    default: 'common',
    enum: [ 'common', 'special' ]
  },
  startDate: {
    type: Date,
    default: new Date(0)
  },
  endDate: {
    type: Date,
    default: new Date(0)
  },
  levels: [{
    type: LevelSchema
  }]
}, {timestamps: true});

export default DungeonSchema;