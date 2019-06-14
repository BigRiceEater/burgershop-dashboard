import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableBody extends Component {
  handleRowClicked = datakey => {
    const { onRowClicked } = this.props;
    if (onRowClicked) {
      onRowClicked(datakey);
    }
  };

  createRow = ({ datakey, values = [] }) => (
    <tr onClick={() => this.handleRowClicked(datakey)}>
      {values.map(value => (
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
  onRowClicked: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      datakey: PropTypes.string.isRequired,
      values: PropTypes.string.isRequired
    })
  )
};

TableBody.defaultProps = {
  data: []
};

export default TableBody;