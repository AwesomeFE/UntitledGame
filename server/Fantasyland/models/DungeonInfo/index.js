import schema from './schema';
import mongoose, { Model } from 'mongoose';

class DungeonInfoModel extends Model {
}

schema.loadClass(DungeonInfoModel);

export const DungeonInfo = mongoose.model('dungeon-info', schema);
