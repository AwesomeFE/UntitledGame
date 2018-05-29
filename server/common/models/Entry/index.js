import mongoose, { Model } from 'mongoose';
import schema from './schema';

class EntryModel extends Model {
  static async log(ip, user) {
    return await this.create({ip, userId: user._id});
  }
}

schema.loadClass(EntryModel);

export const Entry = mongoose.model('entry', schema);
