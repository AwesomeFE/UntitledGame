export interface User {
  _id: string
};

export interface State {
  user?: User;
};

export const state: State = {
  user: null
};