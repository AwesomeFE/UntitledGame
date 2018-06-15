import axios, { AxiosResponse } from 'axios';
import * as SystemTypes from '../../vuex/system/types.d';
import { apiUrls } from '../../constants';

class UserService {
  getSessionUser(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_USER());
  }

  signin(data: SystemTypes.System.Payload.SignIn): Promise<AxiosResponse> {
    return axios(apiUrls.SIGNIN(data));
  }

  signup(data: SystemTypes.System.Payload.SignUp): Promise<AxiosResponse> {
    return axios(apiUrls.SIGNUP(data));
  }

  signout(): Promise<AxiosResponse> {
    return axios(apiUrls.SIGNOUT());
  }
}

export const User = new UserService();