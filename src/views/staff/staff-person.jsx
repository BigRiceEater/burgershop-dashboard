import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import RandomUserIcon from 'components/icons/random-user-icon.jsx';

class StaffPerson extends Component {
  render() {
    const { name } = this.props.data;
    return (
      <Container>
        <Row>
          <Col>
            <RandomUserIcon />
          </Col>
          <Col>{name}</Col>
        </Row>
      </Container>
    );
  }
}

export default StaffPerson;
