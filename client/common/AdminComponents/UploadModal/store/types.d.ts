import { Commit } from 'vuex';

export namespace UploadModal {
  namespace Model {
    interface UploadFile {
      type: string;
      name: string;
      status: number;
    }
  }
  
  interface State {
    isShow: boolean;
    uploadFiles: Array<Model.UploadFile>;
  }
  
  interface Context {
    commit: Commit;
    state: State;
  }
  
  namespace Payload {
    type UploadFile = Model.UploadFile;
  }
}