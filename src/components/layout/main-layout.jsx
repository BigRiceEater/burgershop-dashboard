import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { CrumbMaker } from 'util/crumb-maker';

import TopNavigationBar from 'components/navigation/top-navigation-bar';
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
      <React.Fragment>
        <TopNavigationBar />
        <Container>
          <Row>
            <Col>
              <Container fluid className='my-5'>
                <BreadCrumbs crumbs={this.getCrumbs()} />
                {this.props.children}
              </Container>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(MainLayout);
