/// <reference path="./System/types.d.ts" />
/// <reference path="./Modal/types.d.ts" />

import { StoreOptions } from 'vuex';

export namespace Store {
  interface Module {
    [key: string]: StoreOptions<any>;
  }

  interface options {
    disableModules?: Array<string>;
    modules?: {
      [key: string]: Module;
    };
  }
}