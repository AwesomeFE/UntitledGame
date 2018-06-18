export interface ListItem {
  index?: number;
  _id: string;
  name: string;
}

export type ViewList = Array<ListItem>;