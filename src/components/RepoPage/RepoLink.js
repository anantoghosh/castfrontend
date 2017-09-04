import React from 'react';
import { Link } from 'react-router-dom';

import './RepoLink.css';
import starIcon from './star.svg';
import eyeIcon from './eye.svg';
import forkIcon from './fork.svg';

const RepoLink = props => (
  <Link to={`/u/${props.values.owner.login}`} className="mt2 block" >
    <section className="card">
      <div className="flex flex-wrap justify-between">
        <div className="repo">
          <h1>{props.values.full_name}</h1>
          <p>{props.values.description}</p>
          <p>{props.values.owner.html_url}</p>
        </div>
        <div className="stats">
          <p className="flex items-center">
            <img className="icon" src={starIcon} alt="star icon" width="20" />
            <span>stars: {props.values.stargazers_count}</span>
          </p>
          <p className="flex items-center">
            <img className="icon" src={eyeIcon} alt="star icon" width="20" />
            <span>watchers: {props.values.watchers_count}</span>
          </p>
          <p className="flex items-center">
            <img className="icon" src={forkIcon} alt="star icon" width="20" />
            <span>forks: {props.values.forks_count}</span>
          </p>
        </div>
      </div>
    </section>
  </Link>
);

export default RepoLink;
