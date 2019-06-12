import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

import FormField from './form-field.jsx';

const TextField = props => (
  <FormField label={props.label}>
    <Input type='text' {...props} />
  </FormField>
);

TextField.propTypes = {
  label: PropTypes.string
};

export default TextField;
