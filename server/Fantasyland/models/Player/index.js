import schema from './schema';
import { Character } from '../Character';
import { Model } from 'mongoose';

class PlayerModel extends Model {
}

schema.loadClass(PlayerModel);

export const PlayerController = Character.discriminator('player', schema);
