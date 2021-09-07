import React, { Component } from "react";
import Users from "../../Components/Users";
import UserAPI from "../../services/user";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount (){
    try{
      const response = await UserAPI.fefchUser()
      this.setState({
        users: response.data
      })
    }catch(error){
      console.log(error)
    }
  }


  render() {
    const {users} =this.state
    return (
      <div>
        <Users users={users}/>
      </div>
    );
  }
}

export default Home;
