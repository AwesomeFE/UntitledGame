import { Schema } from 'mongoose';

const ItemSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  weight: {
    type: Number,
    default: 1
  },
  width: {
    type: Number,
    default: 1
  },
  height: {
    type: Number,
    default: 1
  },
  maxCount: {
    type: Number,
    default: 1
  },
  limitation: {
    STR: {
      type: Number,
      default: 0
    },
    AGI: {
      type: Number,
      default: 0
    },
    INT: {
      type: Number,
      default: 0
    },
    level: {
      type: Number,
      default: 0
    },
    career: {
      type: Schema.Types.ObjectId,
      ref: 'career'
    }
  }
}, {timestamps: true});

export default ItemSchema;