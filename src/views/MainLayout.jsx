import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './../util/history';
import { Container, Row, Col } from 'reactstrap';

import SideMenu from './../components/menu/SideMenu';

class MainLayout extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Router history={history}>
          <Row>
            <Col sm='2' style={{ minHeight: '100vh', padding: '0px' }}>
              <SideMenu />
            </Col>
            <Col sm='10'>{this.props.children}</Col>
          </Row>
        </Router>
      </Container>
    );
  }
}

export default MainLayout;
