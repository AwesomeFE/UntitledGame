import axios, { AxiosResponse } from 'axios';
import Types from './types.d';
import { apiUrls } from '../../constants';

class Service {
  getBuff(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_BUFF());
  }

  getBuffById(id: string): Promise<AxiosResponse> {
    return axios(apiUrls.GET_BUFF_BY_ID(id));
  }

  createBuff(data: Types.Model): Promise<AxiosResponse> {
    delete data._id;
    return axios(apiUrls.CREATE_BUFF(data));
  }

  updateBuff(data: Types.Model): Promise<AxiosResponse> {
    return axios(apiUrls.UPDATE_BUFF(data));
  }
}

export const Buff = new Service();