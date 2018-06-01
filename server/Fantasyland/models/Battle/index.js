import schema from './schema';
import { Model } from 'mongoose';
import { DungeonScene } from '../DungeonScene';

class DungeonBattleModel extends Model {
}

schema.loadClass(DungeonBattleModel);

export const DungeonBattle = DungeonScene.discriminator('dungeon-battle', schema);
