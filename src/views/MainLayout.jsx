import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import SideMenu from './../components/navigation/menu/SideMenu';

class MainLayout extends Component {
  state = {};
  render() {
    return (
      <Container fluid style={{ backgroundColor: 'lightgreen' }}>
        <Router>
          <Row>
            <Col sm='4' style={{ minHeight: '100vh', padding: '0px' }}>
              <SideMenu />
            </Col>
            <Col sm='8'>{this.props.children}</Col>
          </Row>
        </Router>
      </Container>
    );
  }
}

export default MainLayout;
