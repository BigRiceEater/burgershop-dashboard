import React, { Component } from 'react';
import history from '../util/history';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Menu extends Component {
  state = {
    selectedMenuKey: 'home',
    menu: [
      { to: '/', label: 'Home', key: 'home' },
      { to: '/orders', label: 'Orders', key: 'orders' },
      { to: '/stocklist', label: 'Stock List', key: 'stock' },
      { to: '/foodmenu', label: 'Food Menu', key: 'foodmenu' },
      { to: '/users', label: 'User Management', key: 'users' },
      { to: '/crm', label: 'Customer Relation Management', key: 'crm' }
    ]
  };

  handleMenuClick = ({ key, to }) => {
    this.setState({ selectedMenuKey: key });
    history.push(to);
  };

  createMenuItem = (item) => {
    const { label, key } = item || {};
    return (
      <ListGroupItem
        key={key}
        tag='button'
        action
        active={key === this.state.selectedMenuKey}
        onClick={() => this.handleMenuClick(item)}>
        {label}
      </ListGroupItem>
    );
  };

  render() {
    return (
      <ListGroup flush>
        {this.state.menu.map((m) => this.createMenuItem(m))}
      </ListGroup>
    );
  }
}

export default Menu;
