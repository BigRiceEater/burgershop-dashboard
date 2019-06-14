import React, { Component } from 'react';
import TableList from 'components/table/table-list';

class StaffTableList extends Component {
  getHeaders = () => {
    return [{ label: 'ID' }, { label: 'Employee' }, { label: 'Job Role' }];
  };

  getData = () => {
    return [['12345', 'John Doe', 'Sales Assistant']];
  };

  render() {
    return <TableList columns={this.getHeaders()} data={this.getData()} />;
  }
}

export default StaffTableList;
