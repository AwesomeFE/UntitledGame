import schema from './schema';
import mongoose, { Schema } from 'mongoose';
import BasicModel from '../BasicModel';

class Player extends BasicModel {
}

schema.loadClass(Player);

export const PlayerController = mongoose.model('players', schema);
