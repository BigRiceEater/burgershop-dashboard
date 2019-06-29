import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import RandomUserIcon from 'components/icons/random-user-icon.jsx';

class StaffPerson extends Component {
  render() {
    const { name } = this.props.data;
    return (
      <span>
        <RandomUserIcon />
        <span className='mx-3'>{name}</span>
      </span>
    );
  }
}

export default StaffPerson;
