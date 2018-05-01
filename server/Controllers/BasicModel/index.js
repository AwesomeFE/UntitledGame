import mongoose, { Model } from 'mongoose';
import { messages } from '../../Constants';

class BasicModel extends Model {
  static messages = messages;
  static FGW = mongoose.connection.useDb('FGW');
  
  static link() {
  }
}

export default BasicModel;