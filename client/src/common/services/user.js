import Service from '../basic/Service';

class UserService extends Service {
  getSessionUser() {
    const { axios, apiUrls } = this;
    return axios(apiUrls.GET_USER());
  }

  signin(data) {
    const { axios, apiUrls } = this;
    return axios(apiUrls.SIGNIN(data));
  }

  signup(data) {
    const { axios, apiUrls } = this;
    return axios(apiUrls.SIGNUP(data));
  }

  signout() {
    const { axios, apiUrls } = this;
    return axios(apiUrls.SIGNOUT());
  }
}

export const User = new UserService();