import axios from 'axios';
import { Store } from '../../types';
import { apiUrls } from '../../constants';

class UserService {
  getSessionUser() {
    return axios(apiUrls.GET_USER());
  }

  signin(data: Store.System.FormData.Signin) {
    return axios(apiUrls.SIGNIN(data));
  }

  signup(data: Store.System.FormData.Signup) {
    return axios(apiUrls.SIGNUP(data));
  }

  signout() {
    return axios(apiUrls.SIGNOUT());
  }
}

export const User = new UserService();