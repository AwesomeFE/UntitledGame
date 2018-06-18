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
    recover: string;
    total: number;
    isIncrease: boolean;
    maintain: number;
    resources: Resources;
  }

  type ModelKeys = keyof Model;
  type ResourceKeys = keyof Resources;
}

export default Consumable;