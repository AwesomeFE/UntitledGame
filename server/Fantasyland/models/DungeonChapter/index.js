import schema from './schema';
import mongoose, { Model } from 'mongoose';

class DungeonChapterModel extends Model {
}

schema.loadClass(DungeonChapterModel);

export const DungeonChapter = mongoose.model('dungeon-chapter', schema);
