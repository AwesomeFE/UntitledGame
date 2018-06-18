import schema from './schema';
import { Item } from '../Item';
import { Model } from 'mongoose';

class ConsumableModel extends Model {
  
}

schema.loadClass(ConsumableModel);

export const Consumable = Item.discriminator('consumable', schema);
