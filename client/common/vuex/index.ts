/// <reference types="node" />

import { CommonStoreOptions, Module } from './index.d';
import * as system from './system';
import * as modal from './modal';

class CommonStore {
  strict = process.env.NODE_ENV !== 'production';

  modules: Module = {
    system,
    modal
  };

  constructor(options?: CommonStoreOptions) {
    this.mergeModulesFromOption(options);
  }

  mergeModulesFromOption(options?: CommonStoreOptions) {
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