import * as CommonTypes from '../../common/types';

export { CommonTypes };

export namespace Types {
  namespace FormData {
    interface Ability {
      STR: number,
      AGI: number,
      VIT: number,
      INT: number,
      DEX: number,
      LUK: number
    }
  
    interface Enemy {
      name: string;
      gender: string;
      XP: number,
      HP: number,
      MP: number,
      ability: Ability,
      standing2D: string,
      attack2D: string
    }
  
    interface FieldFile {
      [key: string]: File
    }
  }
}