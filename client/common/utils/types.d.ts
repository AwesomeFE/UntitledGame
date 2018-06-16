export namespace Utils {
  namespace DataTable {
    interface Header {
      key: string,
      title: string | number
    }

    interface Row {
      key: string,
      value: string | number
    }

    type Headers = Array<Header>;
    type Rows = Array<Array<Row>>;
  }
}