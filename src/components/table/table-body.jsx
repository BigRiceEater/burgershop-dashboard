import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableBody extends Component {
  createRow = row => (
    <tr>
      {row.map(value => (
        <td>{value}</td>
      ))}
    </tr>
  );

  render() {
    const { data } = this.props;
    return <tbody>{data.map(row => this.createRow(row))}</tbody>;
  }
}

TableBody.propTypes = {
  data: PropTypes.array
};

TableBody.defaultProps = {
  data: []
};

export default TableBody;
