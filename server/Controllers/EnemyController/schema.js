import { Schema } from 'mongoose';
import AbilitiesSchema from './abilitiesSchema';

const EnemySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    default: 'human',
    enum: [ 'human' ]
  },
  abilities: {
    type: AbilitiesSchema,
    default: AbilitiesSchema
  },
  url2D: {
    type: String
  },
  url3D: {
    type: String
  },
  // immortal: {
  //   type: Boolean
  // },
  prizes: [{
    type: Schema.Types.ObjectId,
    ref: 'items'
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

export default EnemySchema;