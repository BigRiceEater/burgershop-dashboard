import React, { Component } from 'react';
import TableList from 'components/table/table-list';
import StaffPerson from './staff-person.jsx';

class StaffTableList extends Component {
  getHeaders = () => {
    return [{ label: 'Name' }, { label: 'ID' }, { label: 'Job Role' }];
  };

  getData = () => {
    return [
      {
        datakey: '1234',
        values: [
          {
            component: (
              <StaffPerson
                data={{ name: 'John Doe', gender: 'male', photo: '' }}
              />
            )
          },
          '12345',
          'Sales Assistant'
        ]
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
