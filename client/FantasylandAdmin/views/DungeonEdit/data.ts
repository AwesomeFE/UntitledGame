import { Models, CommonTypes, View } from '../../types';

export const itemList: View.ViewList = [];

export const formJson: Models.Dungeon.Model = {
  _id: '',
  name: '',
  chapters: [],
  resources: {
    thumbnail: ''
  }
};

export const fieldFiles: CommonTypes.Utils.FormFile.FieldFiles = {
  thumbnail: null
};

export const newChapter: Models.Dungeon.Chapter = {
  name: '',
  dungeons: [],
  items: [],
  resources: {
    thumbnail: ''
  }
};

export const newDungeonStory: Models.Dungeon.DungeonStory = {
  name: '',
  type: 'dungeon-story',
  storys: []
};

export const newDungeonBattle: Models.Dungeon.DungeonBattle = {
  name: '',
  type: 'dungeon-battle',
  battles: []
};