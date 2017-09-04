import React from 'react';
import RepoLink from './RepoLink';

const RepoList = (props) => {
  if (props.repos.items === undefined) {
    return <div>Loading...</div>;
  }

  const listItems = props.repos.items.map(object => (
    <RepoLink key={object.id} values={object} />
  ));

  return (
    <div>
      {listItems}
    </div>
  );
};

export default RepoList;
