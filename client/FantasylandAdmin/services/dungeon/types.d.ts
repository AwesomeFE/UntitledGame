declare namespace Dungeon {
  interface ResourceFile {
    thumbnail?: File;
  }

  interface Resources {
    thumbnail: string;
  }

  interface PoolItem {
    name: string;
    probability: number;
    item: string;
  }

  interface EnemyPool {
    pool: Array<PoolItem>;
  }

  interface Battle {
    name: string;
    enemys: Array<EnemyPool>;
  }

  interface DungeonBattle {
    battles: Array<Battle>;
  }

  interface StoryImage {
    isActive: boolean;
    style: string;
    image: string;
  }

  interface StoryContent {
    text: string;
    images: Array<StoryImage>;
  }

  interface Story {
    name: string;
    contents: Array<StoryContent>;
  }

  interface DungeonStory {
    storys: Array<Battle>;
  }

  interface Chapter {
    _id: string;
    name: string;
    dungeons: Array<DungeonBattle | DungeonStory>;
    items: Array<string>;
    resources: Resources;
  }
  
  interface Model {
    _id: string;
    name: string;
    chapters: Array<Chapter>;
  }

  type ModelKeys = keyof Model;
  type ResourceKeys = keyof Resources;
}

export default Dungeon;