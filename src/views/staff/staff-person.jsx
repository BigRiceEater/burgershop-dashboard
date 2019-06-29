import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StaffPerson extends Component {
  render() {
    const { name } = this.props.data;
    return (
      <Container>
        <Row>
          <Col>
            <FontAwesomeIcon icon='user' />
          </Col>
          <Col>{name}</Col>
        </Row>
      </Container>
    );
  }
}

export default StaffPerson;
