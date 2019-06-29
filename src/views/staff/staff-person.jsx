import React, { Component } from 'react';
import RandomUserIcon from 'components/icons/random-user-icon.jsx';

class StaffPerson extends Component {
  render() {
    const { name, gender } = this.props.data;
    return (
      <span>
        <RandomUserIcon gender={gender} />
        <span className='mx-3'>{name}</span>
      </span>
    );
  }
}

export default StaffPerson;
