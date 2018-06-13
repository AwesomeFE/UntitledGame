import axios, { AxiosResponse } from 'axios';
import { Types } from '../../types';
import { apiUrls } from '../../constants';

class UserService {
  getSessionUser(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_USER());
  }

  signin(data: Types.FormData.Signin): Promise<AxiosResponse> {
    return axios(apiUrls.SIGNIN(data));
  }

  signup(data: Types.FormData.Signin): Promise<AxiosResponse> {
    return axios(apiUrls.SIGNUP(data));
  }

  signout(): Promise<AxiosResponse> {
    return axios(apiUrls.SIGNOUT());
  }
}

export const User = new UserService();