import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class MainLayout extends Component {
  state = {};
  render() {
    return (
      <Container fluid style={{ backgroundColor: 'lightgreen' }}>
        <Row>
          <Col sm='4' style={{ minHeight: '100vh', padding: '0px' }}>
            <div
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'lightblue'
              }}>
              {' '}
              Menu{' '}
            </div>
          </Col>
          <Col sm='8'>{this.props.children}</Col>
        </Row>
      </Container>
    );
  }
}

export default MainLayout;
