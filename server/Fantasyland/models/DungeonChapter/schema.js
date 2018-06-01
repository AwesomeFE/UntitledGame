import { Schema } from 'mongoose';
import DungeonBattleSchema from '../DungeonBattle/schema';
import DungeonSceneSchema from '../DungeonScene/schema';
import DungeonStorySchema from '../DungeonStory/schema';

const ChapterSchema = new Schema({
  name: {
    type: String
  },
  dungeons: [
    DungeonSceneSchema
  ],
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'item'
  }]
}, {timestamps: true});

const dungeons = ChapterSchema.path('dungeons');

dungeons.discriminator('dungeon-battle', DungeonBattleSchema);
dungeons.discriminator('dungeon-story', DungeonStorySchema);

const DungeonChapterSchema = new Schema({
  name: {
    type: String
  },
  chapters: [
    ChapterSchema
  ]
}, {timestamps: true});

export default DungeonChapterSchema;
