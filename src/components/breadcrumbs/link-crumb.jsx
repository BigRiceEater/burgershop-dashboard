import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem } from 'reactstrap';
import PropTypes from 'prop-types';

const LinkCrumb = ({ crumb: { to, display } }) => {
  return (
    <BreadcrumbItem>
      <Link to={to}>{display}</Link>
    </BreadcrumbItem>
  );
};

LinkCrumb.propTypes = {
  crumb: PropTypes.shape({
    display: PropTypes.string,
    to: PropTypes.string
  })
};

export default LinkCrumb;
