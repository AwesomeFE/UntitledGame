import * as system from './system';

class CommonStore {
  strict = process.env.NODE_ENV !== 'production';

  modules = {
    system
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