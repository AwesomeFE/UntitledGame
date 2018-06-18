import fs from 'fs';
import schema from './schema';
import mongoose, { Model } from 'mongoose';

class FileModel extends Model {
  static removeByFilePath(path) {
    return new Promise((resolve, reject) => {
      this.findOneAndRemove({ path })
        .then(() => fs.unlink(path, () => resolve()))
        .catch((e) => reject(e));
    });
  }
}

schema.loadClass(FileModel);

export const File = mongoose.model('file', schema);
