import { expect } from 'chai';
import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import App from '../src/App';
import LanguageList from '../src/components/MainPage/LanguageList';
import Header from '../src/components/Header/Header';
import Pagination from '../src/components/RepoPage/Pagination';

describe('<LanguageList />', () => {
  it('contains 5 languages', () => {
    const wrapper = shallow(<LanguageList />);
    expect(wrapper.find('.card').length).to.equal(5);
  });
});

describe('<Header />', () => {
  it('contains searchbox', () => {
    const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
    expect(wrapper.find('input').length).to.equal(1);
  });

  it('contains logo', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.logo > img').length).to.equal(1);
  });
});

describe('<Pagination />', () => {
  it('Max Pages is correct', () => {
    const wrapper = mount(<MemoryRouter><Pagination
      query="java"
      page="1"
      updatePage={() => (null)}
      total="45"
    /></MemoryRouter>);
    expect(wrapper.find('.total-pages').text).to.equal('/ 5');
  });

  it('Max Pages is correct', () => {
    const wrapper = shallow(<MemoryRouter><Pagination
      query="java"
      page="1"
      updatePage={() => (null)}
      total="45"
    /></MemoryRouter>);
    console.log(wrapper.find('.total-pages').text);
    expect(wrapper.find('.total-pages').text).to.equal('/ 5');
  });
});
