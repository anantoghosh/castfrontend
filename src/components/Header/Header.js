import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import SearchBox from './SearchBox';

import githubIcon from './github.svg';
import './Header.css';

const SearchBoxRouted = withRouter(SearchBox);

const Header = () => (
  <header className="flex flex-wrap items-center justify-start header">
    <Link to="/" className="title h5">
      <div className="logo flex items-center">
        <img className="block" src={githubIcon} alt="github logo" width="50" />
        <h1 className="ml2">Cast Frontend</h1>
      </div>
    </Link>
    <div className="ml-auto search"><SearchBoxRouted className="item-end" /></div>
  </header>
);

export default Header;
