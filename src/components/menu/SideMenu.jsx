import React, { Component } from 'react';
import history from './../../util/history';
import { ListGroup, ListGroupItem } from 'reactstrap';

class SideMenu extends Component {
  state = {
    selectedMenuKey: 'home',
    menu: [
      { to: '/', label: 'Home', key: 'home' },
      { to: '/about', label: 'About', key: 'about' }
    ]
  };

  handleMenuClick = ({ key, to }) => {
    this.setState({ selectedMenuKey: key });
    history.push(to);
  };

  createMenuItem = item => {
    const { label, key } = item || {};
    return (
      <ListGroupItem
        key={key}
        tag='a'
        action
        href='#'
        active={key === this.state.selectedMenuKey}
        onClick={() => this.handleMenuClick(item)}
      >
        {label}
      </ListGroupItem>
    );
  };

  render() {
    return (
      <ListGroup>{this.state.menu.map(m => this.createMenuItem(m))}</ListGroup>
    );
  }
}

export default SideMenu;
