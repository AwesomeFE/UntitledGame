import schema from './schema';
import BasicModel from '../../BasicModel';

class Player extends BasicModel {
  get status() {
    const { abilities } = this;

    return {
      ATK: abilities.STR,
      DEF: abilities.STR * 0.75 + abilities.VIT * 0.25,
      MATK: abilities.INT,
      MDEF: abilities.INT * 0.75 + abilities.AGI * 0.25,
      MAXHP: abilities.VIT * 0.75 + abilities.STR * 0.25,
      MAXMP: abilities.INT
    }
  }
}

schema.loadClass(Player);

export const PlayerController = Player.FGW.model('players', schema);
