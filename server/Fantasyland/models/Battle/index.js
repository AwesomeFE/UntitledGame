import schema from './schema';
import mongoose, { Model } from 'mongoose';

class BattleModel extends Model {
}

schema.loadClass(BattleModel);

export const Battle = mongoose.model('battle', schema);
