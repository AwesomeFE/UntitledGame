import schema from './schema';
import mongoose, { Model } from 'mongoose';

class ItemModel extends Model {
  
}

schema.loadClass(ItemModel);

export const Item = mongoose.model('item', schema);
