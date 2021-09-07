import React, { Component } from "react";
import "./index.css";

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  onSubmitSeachUesr = (e) => {
    e.preventDefault();
    this.props.onFetchUser(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <div className="from-clss">
          <form onSubmit={this.onSubmitSeachUesr}>
            <label htmlFor="search" className="form-label">
              SearchUser
            </label>
            <input
              type="text"
              name="search"
              className="form-control"
              value={search}
              onChange={this.onSearchChange}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchUser;
