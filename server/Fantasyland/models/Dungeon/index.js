import schema from './schema';
import mongoose, { Model } from 'mongoose';

class DungeonModel extends Model {
}

schema.loadClass(DungeonModel);

export const Dungeon = mongoose.model('dungeon', schema);
