import React, { Component } from 'react';
import { Table } from 'reactstrap';

import TableHeader from './table-header';
import TableBody from './table-body';

class TableList extends Component {
  render() {
    return (
      <Table>
        <TableHeader {...this.props} />
        <TableBody {...this.props} />
      </Table>
    );
  }
}

export default TableList;
