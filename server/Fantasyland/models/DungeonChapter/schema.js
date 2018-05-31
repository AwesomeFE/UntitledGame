import { Schema } from 'mongoose';
import DungeonStorySchema from '../DungeonStory';

const DungeonChapterSchema = new Schema({
  name: {
    type: String
  },
  dungeon: {
    type: Schema.Types.ObjectId,
    ref: 'dungeon'
  },
  dungeonStory: {
    type: DungeonStorySchema
  }
}, {timestamps: true});

export default DungeonChapterSchema;
