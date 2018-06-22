import { Models, CommonTypes } from '../../types';

export const formJson: Models.Enemy.Model = {
  _id: '',
  name: '',
  gender: 'male',
  description: '',
  XP: 0,
  HP: 1,
  MP: 1,
  STR: 1,
  AGI: 1,
  VIT: 1,
  INT: 1,
  DEX: 1,
  LUK: 1,
  resources: {
    standing2D: '',
    attack2D: ''
  }
};

export const fieldFiles: CommonTypes.Utils.FormFile.FieldFiles = {
  thumbnail: null
};