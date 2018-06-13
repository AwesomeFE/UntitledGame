import axios, { AxiosResponse } from 'axios';
import { Types } from '../../types';
import { apiUrls } from '../../constants';

class FileService {
  uploadFile(data: FormData): Promise<AxiosResponse> {
    return axios(apiUrls.UPLOAD_FILE(data));
  }
}

export const File = new FileService();