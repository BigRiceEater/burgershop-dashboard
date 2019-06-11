import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'reactstrap';

import LinkCrumb from './link-crumb';
import PlainCrumb from './plain-crumb';

export default class BreadCrumbs extends Component {
  render() {
    const { crumbs } = this.props;
    return (
      <Breadcrumb className='mb-3'>
        {crumbs.map(crumb =>
          crumb.to ? <LinkCrumb crumb={crumb} /> : <PlainCrumb crumb={crumb} />
        )}
      </Breadcrumb>
    );
  }
}

BreadCrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      display: PropTypes.string
    })
  )
};
