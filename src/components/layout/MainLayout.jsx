import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Menu from 'components/menu/menu.jsx';
import BreadCrumbs from 'components/breadcrumbs/breadcrumbs.jsx';

class MainLayout extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm='2' style={{ minHeight: '100vh', padding: '0px' }}>
            <Menu />
          </Col>
          <Col sm='10'>
            <Container fluid className='my-5'>
              <BreadCrumbs crumbs={[{ to: '/', display: 'home' }]} />
              {this.props.children}
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainLayout;
