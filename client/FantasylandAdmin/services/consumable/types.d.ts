declare namespace Consumable {
  interface ResourceFile {
    thumbnail?: File;
  }

  interface Resources {
    thumbnail: string;
  }
  
  interface Model {
    _id: string;
    name: string;
    description: string;
    tip: string;
    weight: number;
    width: number;
    height: number;
    maxCount: number;
    buffs: Array<string>;
    resources: Resources;
  }

  type ModelKeys = keyof Model;
  type ResourceKeys = keyof Resources;
}

export default Consumable;