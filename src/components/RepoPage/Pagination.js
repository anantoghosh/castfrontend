import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { debounce } from '../helper';
import './Pagination.css';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.maxPageNumber = 1;
    this.value = 1;
    console.log('contruc');
    this.state = {
      value: this.props.page,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.page,
    });
  }

  setUrl = debounce((value) => {
    this.props.history.push(`/q/${this.props.query}/${value}`);
  }, 1000)

  changePage = (event) => {
    let value = event.target.value;

    if (value !== '') {
      value = parseInt(value, 10);
    }

    if (isNaN(value)) {
      value = 1;
    }

    this.value = value;

    if (value === '' || value < 1) {
      this.value = 1;
    }

    if (value > this.maxPageNumber) {
      this.value = this.maxPageNumber;
    }

    this.setUrl(this.value);

    this.setState({
      value,
    });
  }

  render() {
    const totalResults = this.props.total < 1000 ? this.props.total : 1000;
    let totalPages = parseInt(totalResults / 9, 10);
    if (parseInt(totalResults % 9, 10) > 0) {
      totalPages += 1;
    }
    this.maxPageNumber = totalPages;
    const pageElements = [];
    const page = parseInt(this.props.page, 10);

    if (page > 1) {
      pageElements.push(<Link className="button" to={`/q/${this.props.query}/${page - 1}`} key="prev">← Previous</Link>);
    }

    pageElements.push(<input className="input button" type="text" size="2" value={this.state.value} key="input" onChange={this.changePage} />);
    pageElements.push(<span className="button total-pages" key="total">/ {totalPages}</span>);

    if (page < totalPages) {
      pageElements.push(<Link className="button" to={`/q/${this.props.query}/${page + 1}`} key="next">Next →</Link>);
    }

    return (
      <div className="flex justify-center items-center">
        {pageElements}
      </div>
    );
  }
}

export default Pagination;
