import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableHeader extends Component {
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(({ label }) => (
            <th key={label}>{label}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string
    })
  )
};

TableHeader.defaultProps = {
  columns: []
};

export default TableHeader;
