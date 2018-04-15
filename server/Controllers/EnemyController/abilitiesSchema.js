import { Schema } from 'mongoose';

const AbilitiesSchema = new Schema({
  STR: {
    type: Number,
    default: 1
  },
  AGI: {
    type: Number,
    default: 1
  },
  VIT: {
    type: Number,
    default: 1
  },
  INT: {
    type: Number,
    default: 1
  },
  DEX: {
    type: Number,
    default: 1
  },
  LUK: {
    type: Number,
    default: 1
  }
}, {timestamps: true});

export default AbilitiesSchema;