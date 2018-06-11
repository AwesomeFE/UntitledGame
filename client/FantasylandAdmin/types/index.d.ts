export namespace Store {
  
}

export namespace FormData {
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
    ability: Ability
  }

  interface FieldFile {
    [key: string]: File
  }
}