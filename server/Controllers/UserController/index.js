import mongoose from 'mongoose';

import * as Controller from '../index';
import schema from './schema';
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

  static async getPlayers(userId, gameTypes = ['FGW']) {
    const userData = await this.findOne({ _id: userId });

    const players = [];
    const playersQuery = { _id: { $in: userData.players } };

    for(const gameType of gameTypes) {
      const PlayerController = Controller[gameType].PlayerController;

      for(const player of await PlayerController.find(playersQuery)) {
        players.push(player);
      }
    }

    return players;
  }
}

schema.loadClass(User);

export const UserController = mongoose.model('users', schema);
