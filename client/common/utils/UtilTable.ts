import { Utils } from './types.d';

import Headers = Utils.DataTable.Headers;
import Rows = Utils.DataTable.Rows;

export const UtilTable = {
  getTableRows(headers: Headers, data: Array<any>) {
    const tableRows: Rows = [];
  
    for(const item of data) {
      const row = [];
  
      for(const { key } of headers) {
        switch(key) {
          case 'no':
            row.push({ key: 'no', value: tableRows.length + 1 });
            break;
          case 'action':
            break;
          default:
            row.push({ key, value: item[key] });
            break;
        }
      }
  
      tableRows.push(row);
    }
  
    return tableRows;
  }
};