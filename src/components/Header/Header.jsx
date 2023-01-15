/** @format */

import React from 'react';

import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <div className='container-fluid navbar-container'>
            <a
              className='navbar-brand text-info'
              href='#'
            >
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207'
                alt=''
                height='28'
                width='35'
              />
              <img
                src='https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png'
                alt=''
                height='32'
                width='35'
              />
              <strong>WILLIAM WATSON</strong>
            </a>
            <div className='collapse navbar-collapse justify-content-end'>
              <div className='navbar-nav'>
                <a
                  className='nav-link text-info'
                  href='#'
                >
                  About
                </a>
              </div>
              <div className='navbar-nav'>
                <a
                  className='nav-link text-info'
                  href='#'
                >
                  Portfolio
                </a>
              </div>
              <div className='navbar-nav'>
                <a
                  className='nav-link text-info'
                  href='#'
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
