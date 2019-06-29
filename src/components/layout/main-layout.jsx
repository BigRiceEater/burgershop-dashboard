import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { CrumbMaker } from 'util/crumb-maker';

import TopNavigationBar from 'components/navigation/top-navigation-bar';
import Footer from 'components/footer/footer';
import BreadCrumbs from 'components/breadcrumbs/breadcrumbs.jsx';

class MainLayout extends Component {
  getCrumbs = () => {
    const {
      location: { pathname = '' }
    } = this.props;
    return CrumbMaker.fromRelativePath(pathname);
  };

  render() {
    return (
      <div className='d-flex flex-column'>
        <TopNavigationBar />
        <Container>
          <Row style={{ minHeight: '90vh' }}>
            <Col>
              <div className='my-5'>
                <BreadCrumbs crumbs={this.getCrumbs()} />
                {this.props.children}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(MainLayout);
