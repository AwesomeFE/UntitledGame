import schema from './schema';
import mongoose, { Model } from 'mongoose';

class CharacterModel extends Model {
  get status() {
    const { ability } = this;

    return {
      ATK: ability.STR,
      DEF: ability.STR * 0.75 + ability.VIT * 0.25,
      MATK: ability.INT,
      MDEF: ability.INT * 0.75 + ability.AGI * 0.25,
      MAXHP: ability.VIT * 0.75 + ability.STR * 0.25,
      MAXMP: ability.INT
    }
  }
}

schema.loadClass(CharacterModel);

export const Character = mongoose.model('character', schema);
