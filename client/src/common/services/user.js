import axios from 'axios';
import { apiUrls } from '../constants';

class UserService {
  getSessionUser() {
    return axios(apiUrls.GET_USER());
  }

  signin(data) {
    return axios(apiUrls.SIGNIN(data));
  }

  signup(data) {
    return axios(apiUrls.SIGNUP(data));
  }

  signout() {
    return axios(apiUrls.SIGNOUT());
  }
}

export const User = new UserService();