import axios, { AxiosResponse } from 'axios';
import { apiUrls } from '../../constants';

class FileService {
  uploadFile(data: FormData, callback: (e: ProgressEvent) => void) {
    return axios(apiUrls.UPLOAD_FILE(data, callback));
  }
}

export const File = new FileService();