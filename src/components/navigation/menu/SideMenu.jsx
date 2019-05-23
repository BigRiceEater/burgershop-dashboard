import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

class SideMenu extends Component {
  state = {
    menu: [{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }]
  };

  createMenuItem = ({ to, label }) => (
    <NavItem key={label}>
      <Link to={to}>
        <div style={{ width: '100%', borderBottom: '1px black solid' }}>
          {label}
        </div>
      </Link>
    </NavItem>
  );

  render() {
    return (
      <Nav vertical pills style={{ backgroundColor: 'lightcoral' }}>
        {this.state.menu.map((m) => this.createMenuItem(m))}
      </Nav>
    );
  }
}

export default SideMenu;
