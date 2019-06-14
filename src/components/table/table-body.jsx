import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableBody extends Component {
  render() {
    const { data } = this.props;
    return (
      <tbody>
        {data.map(({ value }) => (
          <tr>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string
    })
  )
};

TableBody.defaultProps = {
  data: []
};

export default TableBody;
