import { Schema } from 'mongoose';

const DungeonBattleSchema = new Schema({
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
  }]
}, {timestamps: true});

export default DungeonBattleSchema;