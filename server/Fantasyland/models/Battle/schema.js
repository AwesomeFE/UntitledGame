import { Schema } from 'mongoose';

const BattleSchema = new Schema({
  name: {
    type: String
  },
  battles: [{
    name: {
      type: String
    },
    enemys: [{
      name: {
        type: String
      },
      enemy: {
        type: Schema.Types.ObjectId,
        ref: 'enemy'
      },
      items: [{
        type: Schema.Types.ObjectId,
        ref: 'item'
      }]
    }]
  }],
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'item'
  }],
  player: {
    type: Schema.Types.ObjectId,
    ref: 'character'
  },
  isFinished: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

export default BattleSchema;