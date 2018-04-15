import schema from './schema';
import mongoose, { Schema } from 'mongoose';
import BasicModel from '../BasicModel';

class Enemy extends BasicModel {
  get status() {
    const { abilities } = this;

    return {
      ATK: abilities.STR,
      DEF: abilities.STR * 0.75 + abilities.VIT * 0.25,
      MATK: abilities.INT,
      MDEF: abilities.INT * 0.75 + abilities.AGI * 0.25,
      HP: abilities.VIT * 0.75 + abilities.STR * 0.25,
      MP: abilities.INT
    }
  }
}

schema.loadClass(Enemy);

export const EnemyController = mongoose.model('enemys', schema);
