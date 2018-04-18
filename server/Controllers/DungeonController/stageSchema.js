import { Schema } from 'mongoose';

const StageSchema = new Schema({
  name: {
    type: String
  },
  order: {
    type: Number
  },
  enemys: [{
    name: {
      type: String
    },
    enemyPool: [{
      rate: {
        type: Number
      },
      enemyId: {
        type: Schema.Types.ObjectId,
        ref: 'enemys'
      }
    }],
    enhance: {
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
    }
  }]
}, {timestamps: true});

export default StageSchema;