import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

class SideMenu extends Component {
  state = {
    selectedMenuKey: 'home',
    menu: [
      { to: '/', label: 'Home', key: 'home' },
      { to: '/about', label: 'About', key: 'about' }
    ]
  };

  handleMenuClick = key => this.setState({ selectedMenuKey: key });

  createMenuItem = item => {
    const { to, label, key } = item || {};
    return (
      <ListGroupItem
        key={key}
        tag='a'
        action
        href='#'
        active={key === this.state.selectedMenuKey}
        onClick={() => this.handleMenuClick(key)}
      >
        {/* <Link to={to}>{label}</Link> */}
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
