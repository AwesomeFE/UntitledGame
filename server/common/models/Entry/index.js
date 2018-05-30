import mongoose, { Model } from 'mongoose';
import schema from './schema';

class EntryModel extends Model {
  static async log(ip, user) {
    return await this.create({ip, userId: user._id});
  }
}

schema.loadClass(EntryModel);

const connection = mongoose.connection.useDb('www');

export const Entry = connection.model('entry', schema);
