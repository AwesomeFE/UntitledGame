import { Schema } from 'mongoose';
import DungeonSchema from '../Dungeon';
import DungeonStorySchema from '../DungeonStory';

const DungeonChapterSchema = new Schema({
  name: {
    type: String
  },
  battles: [{
    enemyArray: [{
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
  }]
}, {timestamps: true});

export default DungeonChapterSchema;