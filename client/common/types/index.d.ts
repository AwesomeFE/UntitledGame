import { ModalState } from './modal';

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
      interface State {
        [key: string]: ModalState;
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