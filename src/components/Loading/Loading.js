import React from 'react';
import loadingIcon from './loading.svg';
import './Loading.css';

const Loading = () => (
  <div>
    <img src={loadingIcon} alt="loading..." width="100" className="loading" />
  </div>
);

export default Loading;
