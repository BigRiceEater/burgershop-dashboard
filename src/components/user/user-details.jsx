import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { TextField, DropdownField } from 'components/form';
import PropTypes from 'prop-types';

class LoginUser extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>User Profile</CardHeader>
          <CardBody>
            <TextField
              label='Username'
              defaultValue='user@gmail.com'
              readOnly
            />
            <DropdownField
              label='Account Level'
              readOnly
              disabled
              options={[{ value: 'assistant', display: 'Assistant' }]}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default LoginUser;
