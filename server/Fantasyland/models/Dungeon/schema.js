import { Schema } from 'mongoose';

const DungeonSchema = new Schema({
  name: {
    type: String
  },
  battles: [{
    name: {
      type: String
    },
    enemyArray: [{
      name: {
        type: String
      },
      probability: {
        type: Number
      },
      enemy: {
        type: Schema.Types.ObjectId,
        ref: 'enemy'
      }
    }]
  }],
  items: [{
    probability: {
      type: Number
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: 'item'
    }
  }]
}, {timestamps: true});

export default DungeonSchema;