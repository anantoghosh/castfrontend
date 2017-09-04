import React from 'react';
import Loading from '../Loading/Loading';

import './UserInfo.css';

const UserInfo = (props) => {
  if (props.user === null) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap justify-around">
      <div className="">
        <img className="" src={props.user.avatar_url} alt="Profile" />
      </div>
      <div className="user-info">
        <h1>
          <span>{props.user.name}</span>
        </h1>
        <h2><a href={`https://github.com/${props.user.login}`} target="_blank">{props.user.login}</a></h2>
        <p>{props.user.bio}</p>
        <p>{props.user.company}</p>
        <p><a href={props.user.blog} target="_blank">{props.user.blog}</a></p>
        <p>{props.user.email}</p>
        <p>{props.user.location}</p>
      </div>
    </div>
  );
};

export default UserInfo;
