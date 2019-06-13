import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from 'util/history';

import MainLayout from 'components/layout/MainLayout';
import Home from 'views/home/home.jsx';
import Staff from 'views/staff/staff.jsx';

export default class MainRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <MainLayout>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/staff' component={Staff} />
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}
