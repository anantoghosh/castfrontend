import React, { Component } from 'react';
import Response from '../helper';

import UserInfo from './UserInfo';
import UserRepos from './UserRepos';
import './UserPage.css';

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      repos: null,
    };
  }

  componentDidMount() {
    this.getUserData(this.props);
  }

  getUserData(props) {
    const param = props.match.params;
    fetch(`https://api.github.com/users/${param.user}`)
      .then(Response.verify)
      .then(Response.toJson)
      .then((data) => {
        console.log(data);
        this.setState({
          user: data,
        });
      })
      .catch(Response.error);

    fetch(`https://api.github.com/users/${param.user}/repos`)
      .then(Response.verify)
      .then(Response.toJson)
      .then((data) => {
        console.log(data);
        this.setState({
          repos: data,
        });
      })
      .catch(Response.error);
  }

  render() {
    return (
      <div className="">
        <UserInfo user={this.state.user} />
        <UserRepos repos={this.state.repos} />
      </div>
    );
  }
}

export default UserPage;
