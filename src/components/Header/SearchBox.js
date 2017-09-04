import React, { Component } from 'react';

import { debounce } from '../helper';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      value: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   value: nextProps.page,
    // });
  }

  startSearch = debounce((value) => {
    if (value === '' || !/^\w*$/g.test(value)) {
      this.props.history.push('/');
    } else {
      this.props.history.push(`/q/${value}/1`);
    }
  }, 1000)

  changePage = (event) => {
    const value = event.target.value;

    this.startSearch(value);

    this.setState({
      value,
    });
  }

  render() {
    return (
      <div>
        <input className="p1" placeholder="Search" type="text" value={this.state.value} key="input" onChange={this.changePage} />
      </div>
    );
  }
}

export default SearchBox;
