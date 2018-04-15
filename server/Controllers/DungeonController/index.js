import schema from './schema';
import mongoose, { Schema } from 'mongoose';
import BasicModel from '../BasicModel';

class Dungeon extends BasicModel {
  
}

schema.loadClass(Dungeon);

export const DungeonController = mongoose.model('dungeons', schema);
