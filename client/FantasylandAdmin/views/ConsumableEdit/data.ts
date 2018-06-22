import { Models, CommonTypes, View } from '../../types';

export const buffList: View.ViewList = [];

export const formJson: Models.Consumable.Model = {
  _id: '',
  name: '',
  description: '',
  tip: '',
  weight: 1,
  width: 1,
  height: 1,
  maxCount: 1,
  buffs: [],
  resources: {
    thumbnail: ''
  }
};

export const fieldFiles: CommonTypes.Utils.FormFile.FieldFiles = {
  thumbnail: null
};