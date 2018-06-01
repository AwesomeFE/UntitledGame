import { Schema } from 'mongoose';

const DungeonBattleSchema = new Schema({
  battles: [{
    name: {
      type: String
    },
    enemys: [{
      pool: [{
        name: {
          type: String
        },
        probability: {
          type: Number
        },
        item: {
          type: Schema.Types.ObjectId,
          ref: 'enemy'
        }
      }]
    }]
  }]
}, {timestamps: true});

export default DungeonBattleSchema;