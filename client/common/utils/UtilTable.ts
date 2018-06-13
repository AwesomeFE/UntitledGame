import { Types } from '../types';

export const UtilTable = {
  getTableRows(headers: Array<Types.DataTable.headerItem>, data: Array<any>) {
    const tableRows: Array<Array<Types.DataTable.dataItem>> = [];
  
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
            row.push({ key, value: item[key] })
        }
      }
  
      tableRows.push(row);
    }
  
    return tableRows;
  }
};