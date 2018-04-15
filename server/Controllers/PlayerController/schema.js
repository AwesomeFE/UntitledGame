import { Schema } from 'mongoose';
import AbilitiesSchema from './abilitiesSchema';

const PlayerSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'none']
  },
  abilities: {
    type: AbilitiesSchema,
    default: AbilitiesSchema
  },
  level: {
    type: Number,
    default: 0
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'Player'
  }],
  storys: [{
    type: Schema.Types.ObjectId,
    ref: 'Story'
  }],
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }],
  skills: [{
    type: Schema.Types.ObjectId,
    ref: 'Skill'
  }]
}, {
  timestamps: true,
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

export default PlayerSchema;