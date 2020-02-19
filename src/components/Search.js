import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Search;
