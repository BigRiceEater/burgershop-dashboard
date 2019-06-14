import React, { Component } from 'react';
import { Table } from 'reactstrap';

import TableHeader from './table-header';
import TableBody from './table-body';

class TableList extends Component {
  render() {
    const { columns, data } = this.props;
    return (
      <Table>
        <TableHeader columns={columns} />
        <TableBody data={data} />
      </Table>
    );
  }
}

export default TableList;
