import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import 'basscss/css/basscss.css';

import Header from './components/Header/Header';
import LanguageList from './components/MainPage/LanguageList';
import RepoPage from './components/RepoPage/RepoPage';
import UserPage from './components/UserPage/UserPage';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Header />
          {/* <Route path="/" component={props => <Header {...props} />} /> */}
          <div className="container">
            <Switch>
              <Route exact path="/" component={LanguageList} />
              <Route path="/q/:query/:page" component={props => <RepoPage {...props} />} />
              <Route path="/u/:user" component={props => <UserPage {...props} />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
