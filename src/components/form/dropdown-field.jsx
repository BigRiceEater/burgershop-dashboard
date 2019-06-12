import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

import FormField from './form-field';

const DropdownField = props => {
  return (
    <FormField label={props.label}>
      <Input type='select' {...props}>
        {props.options.map(({ value, display }) => (
          <option key={value} value={value}>
            {display}
          </option>
        ))}
      </Input>
    </FormField>
  );
};

DropdownField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      display: PropTypes.string
    })
  )
};

DropdownField.defaultProps = {
  options: []
};
export default DropdownField;
