import schema from './schema';
import mongoose, { Schema } from 'mongoose';
import BasicModel from '../BasicModel';
import { encryptPassword } from './helper';

class User extends BasicModel {
  static async signUp(formData) {
    formData.password = encryptPassword(formData.password);

    return await this.create(formData);
  }

  static async signIn(formData) {
    const { messages } = BasicModel;
    const password = encryptPassword(formData.password);

    delete formData.password;
    const userData = await this.findOne(formData);

    if(userData) {
      if(userData.password === password) {
        return userData;
      } else {
        throw messages.PASSWORD_INVALID;
      }
    } else {
      throw messages.USER_NOT_FOUND;
    }
  }

  static async getPlayers(userId) {
    const userData = await this.findOne({ _id: userId }).populate('players');

    return userData.players;
  }
}

schema.loadClass(User);

export const UserController = mongoose.model('users', schema);
