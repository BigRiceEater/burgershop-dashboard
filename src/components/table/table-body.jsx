import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableBody extends Component {
  handleRowClicked = datakey => {
    const { onRowClicked } = this.props;
    if (onRowClicked) {
      onRowClicked(datakey);
    }
  };

  createRow = ({ datakey, values = [] }) => {
    return (
      <tr key={datakey} onClick={() => this.handleRowClicked(datakey)}>
        {values.map((value, idx) => {
          const { component = undefined } = value;
          if (component) {
            return (
              <td className='align-middle' key={idx}>
                {component}
              </td>
            );
          } else {
            return (
              <td className='align-middle' key={idx}>
                {value}
              </td>
            );
          }
        })}
      </tr>
    );
  };

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
      values: PropTypes.array.isRequired
    })
  )
};

TableBody.defaultProps = {
  data: []
};

export default TableBody;
