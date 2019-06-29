import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class StaffPerson extends Component {
  render() {
    const { name } = this.props.data;
    return (
      <Container>
        <Row>
          <Col>image</Col>
          <Col>{name}</Col>
        </Row>
      </Container>
    );
  }
}

export default StaffPerson;
