/// <reference types="node" />

import { Store } from './types.d';
import * as System from './System';
import * as Modal from './Modal';

class CommonStore {
  strict: boolean = process.env.NODE_ENV !== 'production';

  modules: Store.Module = {
    System,
    Modal
  };

  constructor(options?: Store.options) {
    this.mergeModulesFromOption(options);
  }

  mergeModulesFromOption(options?: Store.options) {
    if(options) {
      const { disableModules = [], modules } = options;
    
      for(const moduleName of disableModules) {
        delete this.modules[moduleName];
      }

      this.modules = {
        ...this.modules, ...modules
      };
    }
  }
};

export default CommonStore;