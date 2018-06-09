export declare namespace Store {

  namespace System {
    /**
     * Store.System.User
     */
    interface User {
      _id: string;
    }
    
    /**
     * Store.System.State
     */
    interface State {
      user?: User;
    }

    /**
     * Store.System.FormData
     */
    namespace FormData {
      interface Signin {
        username: string;
        password: string;
      }
    
      interface Signup {
        username: string;
        password: string;
      }
    }
  }
}