import * as system from './system';
import * as game from './game';

class CommonStore {
  strict = process.env.NODE_ENV !== 'production';

  modules = {
    system,
    game
  };

  constructor(options = {}) {
    const { disableModules = [], modules } = options;
    
    for(const moduleName of disableModules) {
      delete this.modules[moduleName];
    }

    this.modules = {
      ...this.modules, ...modules
    };
  }
};

export default CommonStore;