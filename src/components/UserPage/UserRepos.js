import React from 'react';
import RepoLink from '../RepoPage/RepoLink';

const UserRepos = (props) => {
  if (props.repos === null) {
    return <div />;
  }

  const reposList = props.repos.map(object => (
    <RepoLink key={object.id} values={object} />
  ));

  return <div>{reposList}</div>;
};

export default UserRepos;
