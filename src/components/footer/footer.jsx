import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div>
          <p>
            Icons made by{' '}
            <a href='https://www.freepik.com/' title='Freepik'>
              Freepik
            </a>{' '}
            from{' '}
            <a href='https://www.flaticon.com/' title='Flaticon'>
              www.flaticon.com
            </a>{' '}
            is licensed by{' '}
            <a
              href='http://creativecommons.org/licenses/by/3.0/'
              title='Creative Commons BY 3.0'
              target='_blank'
              rel='noopener noreferrer'
            >
              CC 3.0 BY
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
