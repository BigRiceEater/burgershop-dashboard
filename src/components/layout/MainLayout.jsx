import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { CrumbMaker } from 'util/crumb-maker';

import Menu from 'components/menu/menu.jsx';
import BreadCrumbs from 'components/breadcrumbs/breadcrumbs.jsx';

class MainLayout extends Component {
  getCrumbs = () => {
    const {
      location: { pathname = '' }
    } = this.props;
    const crumbs = CrumbMaker.fromRelativePath(pathname);
    console.log('crumbs', crumbs);
    return crumbs;
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm='2' style={{ minHeight: '100vh', padding: '0px' }}>
            <Menu />
          </Col>
          <Col sm='10'>
            <Container fluid className='my-5'>
              <BreadCrumbs crumbs={this.getCrumbs()} />
              {this.props.children}
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(MainLayout);
