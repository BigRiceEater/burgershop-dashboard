import React, { Component } from 'react';

import UserDetails from 'components/user/user-details.jsx';

class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <UserDetails />
      </React.Fragment>
    );
  }
}

export default HomeView;
