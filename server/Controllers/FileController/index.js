import schema from './schema';
import mongoose, { Schema } from 'mongoose';
import BasicModel from '../BasicModel';

class File extends BasicModel {
}

schema.loadClass(File);

export const FileController = mongoose.model('files', schema);
