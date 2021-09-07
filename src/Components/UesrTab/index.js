import React, { Component } from "react";
import "./uesrTab.css";
class UesrTab extends Component {
  render() {
    const { followers, following, public_gists, public_repos } =
      this.props.aser;
    return (
      <div className="uesrtab-container">
        <div className="uesrtab-item item-1">followers: {followers}</div>
        <div className="uesrtab-item item-2">following: {following}</div>
        <div className="uesrtab-item item-3">public_repos: {public_repos}</div>
        <div className="uesrtab-item item-4">public_gists: {public_gists} </div>
      </div>
    );
  }
}

export default UesrTab;
