import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import RandomUserIcon from 'components/icons/random-user-icon.jsx';

class StaffPerson extends Component {
  render() {
    const { name } = this.props.data;
    return (
      <div className='d-flex align-items-center'>
        <RandomUserIcon />
        <div className='mx-3'>{name}</div>
      </div>
    );
  }
}

export default StaffPerson;
