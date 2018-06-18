declare namespace Enemy {
  interface Resource {
    standing2D?: File;
    attack2D?: File;
  }
  
  interface Model {
    _id: string;
    name: string;
    gender: string;
    description: string;
    XP: number;
    HP: number;
    MP: number;
    STR: number;
    AGI: number;
    VIT: number;
    INT: number;
    DEX: number;
    LUK: number;
    standing2D: string;
    attack2D: string;
  }

  type ModelKeys = keyof Model;
  type ResourceKeys = keyof Resource;
}

export default Enemy;