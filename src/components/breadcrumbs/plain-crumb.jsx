import React from 'react';
import { BreadcrumbItem } from 'reactstrap';
import PropTypes from 'prop-types';

const PlainCrumb = ({ crumb: display }) => (
  <BreadcrumbItem>{display}</BreadcrumbItem>
);

PlainCrumb.propTypes = {
  crumb: PropTypes.shape({ display: PropTypes.string })
};

export default PlainCrumb;
