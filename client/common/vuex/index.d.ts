import { StoreOptions } from 'vuex';

export interface Module {
  [key: string]: StoreOptions<any>;
};

export interface CommonStoreOptions {
  disableModules: Array<string>;
  modules: {
    [key: string]: Module;
  };
};