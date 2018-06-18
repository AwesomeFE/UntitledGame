import axios, { AxiosResponse } from 'axios';
import Types from './types.d';
import { apiUrls } from '../../constants';

class Service {
  getConsumable(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_CONSUMABLE());
  }

  getConsumableById(id: string): Promise<AxiosResponse> {
    return axios(apiUrls.GET_CONSUMABLE_BY_ID(id));
  }

  createConsumable(data: Types.Model): Promise<AxiosResponse> {
    delete data._id;
    return axios(apiUrls.CREATE_CONSUMABLE(data));
  }

  updateConsumable(data: Types.Model): Promise<AxiosResponse> {
    return axios(apiUrls.UPDATE_CONSUMABLE(data));
  }
}

export const Consumable = new Service();