import React, { Component } from 'react';
import history from 'util/history';
import { SiteRoute } from 'util/site-route';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  createMenuItem = item => {
    const { label, key } = item || {};
    return (
      <ListGroupItem
        style={styles.menuItem}
        color='primary'
        key={key}
        tag='button'
        action
        active={key === this.state.selectedMenuKey}
        onClick={() => this.handleMenuClick(item)}
      >
        {label}
      </ListGroupItem>
    );
  };

  render() {
    return (
      <aside>
        <ListGroup flush className='burgershop-menu'>
          {this.state.menu.map(m => this.createMenuItem(m))}
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
