import axios, { AxiosResponse } from 'axios';
import { Store } from '../../types';
import { apiUrls } from '../../constants';

class UserService {
  getSessionUser(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_USER());
  }

  signin(data: Store.System.FormData.Signin): Promise<AxiosResponse> {
    return axios(apiUrls.SIGNIN(data));
  }

  signup(data: Store.System.FormData.Signup): Promise<AxiosResponse> {
    return axios(apiUrls.SIGNUP(data));
  }

  signout(): Promise<AxiosResponse> {
    return axios(apiUrls.SIGNOUT());
  }
}

export const User = new UserService();