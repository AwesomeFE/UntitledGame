import { Schema } from 'mongoose';
import StorySchema from '../Story';

const DungeonStorySchema = new Schema({
  name: {
    type: String
  },
  prevStory: {
    type: StorySchema
  },
  nextStory: {
    type: StorySchema
  },
  dungeon: {
    type: Schema.Types.ObjectId,
    ref: 'dungeon'
  }
}, {timestamps: true});

export default DungeonStorySchema;
