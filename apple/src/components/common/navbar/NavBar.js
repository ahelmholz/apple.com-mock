import React from 'react';
import './navbar.css';
import logo from './img/logo.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends React.Component{
  render(){
    return(
      <header>
        <div class="bar-positioner">
          <img src={logo} class="logo"/>
          <nav>
            <ul>
              <li id="horizontal-list">Mac</li>
              <li id="horizontal-list">iPad</li>
              <li id="horizontal-list">iPhone</li>
              <li id="horizontal-list">Watch</li>
              <li id="horizontal-list">TV</li>
              <li id="horizontal-list">Music</li>
              <li id="horizontal-list">Support</li>
              <li id="horizontal-list"><FontAwesomeIcon icon={faSearch}/></li>
              <li id="horizontal-list"><FontAwesomeIcon icon={faShoppingBag}/></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}