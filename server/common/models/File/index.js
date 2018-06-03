import schema from './schema';
import mongoose, { Model } from 'mongoose';

class FileModel extends Model {
}

schema.loadClass(FileModel);

export const File = mongoose.model('file', schema);
