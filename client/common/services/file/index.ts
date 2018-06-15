import axios, { AxiosResponse } from 'axios';
import { apiUrls } from '../../constants';

class FileService {
  uploadFile(data: FormData, callback: (progress: any) => void) {
    return axios(apiUrls.UPLOAD_FILE(data));
  }
}

export const File = new FileService();