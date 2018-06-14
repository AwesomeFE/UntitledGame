import { modalTypes } from '../constants/index';
import { UploadModal } from '../AdminComponents/UploadModal';
import { LoadingModal } from '../AdminComponents/LoadingModal';

export namespace CommonTypes {
  
  export namespace Store {
    namespace System {
      interface User {
        _id: string;
      }

      interface Modal {
        isShow?: boolean;
        type: string;
        [key: string]: any;
      }
      
      interface State {
        user?: User;
        modals: Array<Modal>
      }
    }
    
    namespace Modal {
      type Payload = LoadingModal | UploadModal;

      // type ModalState = 

      interface State {
        [key: string]:
          LoadingModal |
          UploadModal;
      }
    }
  }
  
  export namespace FormData {
    interface Signin {
      username: string;
      password: string;
    }
  
    interface Signup {
      username: string;
      password: string;
    }
  }
  
  export namespace DataTable {
    interface headerItem {
      key: string,
      title: string
    }
  
    interface dataItem {
      key: string,
      value: number | string
    }
  }
}