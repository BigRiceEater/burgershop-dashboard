import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';

const FormField = ({ label, children }) => (
  <FormGroup>
    <Label>{label}</Label>
    {children}
  </FormGroup>
);

FormField.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
};

export default FormField;
