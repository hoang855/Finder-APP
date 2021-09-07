import React, { Component } from "react";

import "./Uesrinfo.css";

class UesrInfo extends Component {
  render() {
    const { repos } = this.props;
    return (
      <div className="info-container">
        <h1>Repositories</h1>
        <div className="info-container-felex">
          {repos.map((items) => {
            const { name, svn_url, description, clone_url } = items;
            return (
              <div className="info-main">
                <a href={clone_url}>
                  <h2>{name}</h2>
                </a>
                <p>
                  <span>
                    Forked From
                    <a href={svn_url} h></a>
                  </span>
                </p>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UesrInfo;
