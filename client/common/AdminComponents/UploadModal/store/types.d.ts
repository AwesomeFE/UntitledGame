import { Commit } from 'vuex';

export namespace Store {
  namespace Modal {
    namespace UploadModal {
      namespace Model {
        interface UploadFile {
          id: string;
          name: string;
          field: string;
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
  }
}