import React from 'react';
import { Link } from 'react-router-dom';

import jsIcon from './javascript.svg';
import javaIcon from './java.svg';
import pythonIcon from './python.svg';
import phpIcon from './php.svg';
import rubyIcon from './ruby.svg';

const languagesList = Object.freeze([
  {
    name: 'Javascript',
    imageURL: jsIcon,
  },
  {
    name: 'Java',
    imageURL: javaIcon,
  },
  {
    name: 'Python',
    imageURL: pythonIcon,
  },
  {
    name: 'PHP',
    imageURL: phpIcon,
  },
  {
    name: 'Ruby',
    imageURL: rubyIcon,
  },
]);


const LanguageList = () => (
  <div className="flex flex-wrap justify-around">
    {
      languagesList.map((object, index) => (
        <Link to={`/q/${object.name}/1`} role="button" tabIndex="0" key={index} className="mt4" >
          <div className="card">
            <img src={object.imageURL} alt={object.name} width="200" className="block" />
          </div>
        </Link>
      ))
    }
  </div>
);

export default LanguageList;
