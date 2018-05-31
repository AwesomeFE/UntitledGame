import schema from './schema';
import mongoose, { Model } from 'mongoose';

class DungeonBattleModel extends Model {
}

schema.loadClass(DungeonBattleModel);

export const DungeonBattle = mongoose.model('dungeon-battle', schema);
