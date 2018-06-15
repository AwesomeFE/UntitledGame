import { Commit } from 'vuex';

export namespace Store {
  namespace System {
    namespace Model {
      interface User {
        _id: string;
      }
    }
    
    interface State {
      user: Model.User
    }
    
    interface Context {
      commit: Commit;
      state: State;
    }
    
    namespace Payload {
      type User = Model.User;
    
      interface SignIn {
        username: string;
        password: string;
      }
    
      interface SignUp {
        username: string;
        password: string;
      }
    }
  }
}