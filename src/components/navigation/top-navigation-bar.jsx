import React, { Component } from 'react';
import {
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from 'reactstrap';

import SiteIcon from 'components/icons/site-logo';

import history from 'util/history';
import { SiteRoute } from 'util/site-route';

class TopNavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedMenuKey: SiteRoute.home.key,
      menu: Object.keys(SiteRoute).map(menuItem => {
        const { path, display, key } = SiteRoute[menuItem];
        return { to: path, label: display, key };
      })
    };
  }

  handleMenuClick = ({ key, to }) => {
    this.setState({ selectedMenuKey: key });
    history.push(to);
  };

  render() {
    /* NavBar is for responsive behaviour */
    return (
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand>
          <SiteIcon />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            {this.state.menu.map(m => (
              <NavItem key={m.key}>
                <NavLink onClick={() => this.handleMenuClick(m)}>
                  {m.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default TopNavigationBar;
