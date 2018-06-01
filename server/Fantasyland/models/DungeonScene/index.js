import schema from './schema';
import mongoose, { Model } from 'mongoose';

class DungeonSceneModel extends Model {
}

schema.loadClass(DungeonSceneModel);

export const DungeonScene = mongoose.model('dungeon-scene', schema);
