import { Schema } from 'mongoose';
import DungeonStorySchema from '../DungeonStory';

const DungeonChapterSchema = new Schema({
  name: {
    type: String
  },
  dungeons: [{
    dungeon: {
      type: Schema.Types.ObjectId,
      ref: 'dungeon'
    },
    dungeonStory: {
      type: DungeonStorySchema
    }
  }],
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'item'
  }]
}, {timestamps: true});

export default DungeonChapterSchema;
