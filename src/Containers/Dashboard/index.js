import React, { Component } from "react";
import UserAPI from "../../services/user";
import BoardItem from "../../Components/BoardItem";
import UesrTab from "../../Components/UesrTab";
import UesrInfo from "../../Components/UesrInfo"
import axios from "axios";


class Dashboard extends Component {
  state = {
    aser: {},
    repos: [],
  };
  
  async componentDidMount() {
    try {
      const login = this.props.match.params.login;
      const response = await UserAPI.loginUser(login);
      const responseRepo = await axios.get(`https://api.github.com/users/${login}/repos`)
      this.setState({
        aser: response.data,
        repos: responseRepo.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  onBacktoHome = () =>{
    this.props.history.push("/")
  }

  render() {
    const { aser, repos} = this.state;
    return (
      <div className="container-board">
        <div className="container-btn">
          <a href onClick={this.onBacktoHome}>Back to Home</a>
          <h1>
            <strong>Hierable:</strong>
            <i class="fas fa-check-circle"></i>
          </h1>
        </div>
        <BoardItem aser={aser}/>
        <UesrTab aser={aser}/>
        <UesrInfo repos={repos}/>
      </div>
    );
  }
}

export default Dashboard;
