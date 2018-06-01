import { Schema } from 'mongoose';
import StorySchema from '../Story';

const DungeonStorySchema = new Schema({
  storys: [
    StorySchema
  ]
}, {timestamps: true});

export default DungeonStorySchema;