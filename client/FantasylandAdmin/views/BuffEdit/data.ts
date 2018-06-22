import { Models, CommonTypes } from '../../types';

export const formJson: Models.Buff.Model = {
  _id: '',
  name: '',
  description: '',
  tip: '',
  recover: 'HP',
  total: 1,
  isIncrease: false,
  maintain: 1000,
  resources: {
    thumbnail: ''
  }
};

export const fieldFiles: CommonTypes.Utils.FormFile.FieldFiles = {
  thumbnail: null
};