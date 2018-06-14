interface uploadFile {
  field: string;
  status: number;
}

export interface UploadModal {
  isShow: boolean;
  uploadFiles: Array<uploadFile>;
}