import React, { Component } from "react";
import SearchUser from "../../Components/SearchUser";
import UserAPI from "../../services/user";
import Users from "../../Components/Users";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
  }
  onFetchUser = async (search) => {
    try {
      this.setState({
        isLoading: true,
      });
      const response = await UserAPI.SearchUser(search);
      this.setState({
        users: response.data.items,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { users, isLoading } = this.state;
    return (
      <div>
        <SearchUser onFetchUser={this.onFetchUser} />
        <Users users={users} isLoading={isLoading} />
      </div>
    );
  }
}

export default Search;
