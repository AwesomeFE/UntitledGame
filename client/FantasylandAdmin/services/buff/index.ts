import axios, { AxiosResponse } from 'axios';
import BuffTypes from './types.d';
import { apiUrls } from '../../constants';

class Service {
  getBuff(): Promise<AxiosResponse> {
    return axios(apiUrls.GET_BUFF());
  }

  getBuffById(enemyId: string): Promise<AxiosResponse> {
    return axios(apiUrls.GET_BUFF_BY_ID(enemyId));
  }

  createBuff(enemyData: BuffTypes.Model): Promise<AxiosResponse> {
    delete enemyData._id;
    return axios(apiUrls.CREATE_BUFF(enemyData));
  }

  updateBuff(enemyData: BuffTypes.Model): Promise<AxiosResponse> {
    return axios(apiUrls.UPDATE_BUFF(enemyData));
  }
}

export const Buff = new Service();