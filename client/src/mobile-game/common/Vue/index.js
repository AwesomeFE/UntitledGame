import * as strings from '../../constants';
import * as images from '../../assets/images';
import * as models from '../../assets/models';
import { CommonVue } from '../../../common';

export class Vue extends CommonVue {
  static strings = strings;
  static models = models;
  static images = images;
};
