import React, { Component } from 'react';
import './header.css';
export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <button >My Blog</button>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <button >Home</button>
              </li>

            </ul>
          </nav>
        </header>

      </div>
    );
  }
}

