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
  }]
}, {timestamps: true});

export default BattleSchema;