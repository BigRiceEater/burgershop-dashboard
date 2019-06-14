import React, { Component } from 'react';
import TableList from 'components/table/table-list';

class StaffTableList extends Component {
  getHeaders = () => {
    return [{ label: 'ID' }, { label: 'Employee' }, { label: 'Job Role' }];
  };

  getData = () => {
    return [
      {
        datakey: '1234',
        values: ['12345', 'John Doe', 'Sales Assistant']
      }
    ];
  };

  handleRowClicked = datakey => {
    alert(`You clicked on ${datakey}`);
  };

  render() {
    return (
      <TableList
        columns={this.getHeaders()}
        data={this.getData()}
        onRowClicked={this.handleRowClicked}
      />
    );
  }
}

export default StaffTableList;
