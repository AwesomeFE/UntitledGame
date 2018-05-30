import schema from './schema';
import { Character } from '../Character';
import { Model } from 'mongoose';

class EnemyModel extends Model {
}

schema.loadClass(EnemyModel);

export const Enemy = Character.discriminator('enemy', schema);
