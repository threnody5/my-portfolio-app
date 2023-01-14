/** @format */

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
          <a
            className='navbar-brand'
            href='#'
          >
            Navbar
          </a>
        </nav>
      </div>
    );
  }
}
