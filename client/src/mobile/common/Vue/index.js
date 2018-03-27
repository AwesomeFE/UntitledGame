import * as strings from '../../constants';
import * as images from '../../assets/images';
import * as assets from '../../assets/game';
import { CommonVue } from '../../../common';

export class Vue extends CommonVue {
  static strings = strings;
  static assets = assets;
  static images = images;
};
