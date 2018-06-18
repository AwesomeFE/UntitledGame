import schema from './schema';
import mongoose, { Model } from 'mongoose';

class CharacterModel extends Model {
  get status() {
    const { STR, VIT, INT, AGI } = this;

    return {
      ATK: STR &&
        STR * 1,
      DEF: (STR && VIT) &&
        STR * 0.75 + VIT * 0.25,
      MATK: INT &&
        INT * 1,
      MDEF: (INT && AGI) &&
        INT * 0.75 + AGI * 0.25,
      MAXHP: (VIT && STR) &&
        VIT * 0.75 + STR * 0.25,
      MAXMP: INT &&
        INT * 1
    }
  }
}

schema.loadClass(CharacterModel);

export const Character = mongoose.model('character', schema);
