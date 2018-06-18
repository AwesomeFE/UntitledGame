import schema from './schema';
import mongoose, { Model } from 'mongoose';

class BuffModel extends Model {
  
}

schema.loadClass(BuffModel);

export const Buff = mongoose.model('buff', schema);
