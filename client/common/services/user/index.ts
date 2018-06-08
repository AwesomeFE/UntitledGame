import axios from 'axios';
import FormData from './index.d';
import { apiUrls } from '../../constants';

class UserService {
  getSessionUser() {
    return axios(apiUrls.GET_USER());
  }

  signin(data: FormData.Signin) {
    return axios(apiUrls.SIGNIN(data));
  }

  signup(data: FormData.Signup) {
    return axios(apiUrls.SIGNUP(data));
  }

  signout() {
    return axios(apiUrls.SIGNOUT());
  }
}

export const User = new UserService();