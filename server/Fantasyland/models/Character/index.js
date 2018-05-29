import schema from './schema';
import mongoose, { Model } from 'mongoose';

class CharacterModel extends Model {
}

schema.loadClass(CharacterModel);

export const Character = mongoose.model('character', schema);
