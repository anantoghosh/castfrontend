import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Response from '../helper';
import RepoList from './RepoList';
import Pagination from './Pagination';

import Loading from '../Loading/Loading';

const PaginationRouted = withRouter(Pagination);

class RepoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  componentDidMount() {
    this.getData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const param = this.props.match.params;
    const newParam = nextProps.match.params;
    if ((param.page !== newParam.page) || (param.query !== newParam.query)) {
      this.getData(nextProps);
    }
  }

  getData(props) {
    const param = props.match.params;
    fetch(`https://api.github.com/search/repositories?q=${param.query}&page=${param.page}&per_page=9`)
      .then(Response.verify)
      .then(Response.toJson)
      .then((data) => {
        this.setState({
          query: data,
        });
      })
      .catch(Response.error);
  }

  render() {
    if (this.state.query.items === undefined) {
      return <Loading />;
    }

    return (
      <div>
        <RepoList repos={this.state.query} />
        <div className="mx-auto my4">
          <PaginationRouted
            query={this.props.match.params.query}
            page={this.props.match.params.page}
            updatePage={this.getData}
            total={this.state.query.total_count}
          />
        </div>
      </div>
    );
  }
}

export default RepoPage;
