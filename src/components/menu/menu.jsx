import React, { Component } from 'react';
import history from '../../util/history';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './menu.scss'

class Menu extends Component {
  state = {
    selectedMenuKey: 'home',
    menu: [
      { to: '/', label: 'Home', key: 'home' },
      { to: '/orders', label: 'Orders', key: 'orders' },
      { to: '/stocklist', label: 'Stock List', key: 'stock' },
      { to: '/foodmenu', label: 'Food Menu', key: 'foodmenu' },
      { to: '/users', label: 'Users', key: 'users' },
      { to: '/crm', label: 'CRM', key: 'crm' }
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
        style={styles.menuItem}
        color='primary'
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
      <aside>
        <ListGroup flush className='burgershop-menu'>
          {this.state.menu.map((m) => this.createMenuItem(m))}
        </ListGroup>
      </aside>
    );
  }
}

const styles = {

  menuItem: {
    padding: '10px',
    fontSize: '0.8em'
  }
};

export default Menu;
