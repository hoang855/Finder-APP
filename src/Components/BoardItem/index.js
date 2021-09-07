import React, { Component } from "react";
import "./boar.css";

class BoardItem extends Component {
  render() {
    const { avatar_url, bio, company, location, name, blog, login, html_url } =
      this.props.aser;
    return (
      <div className="container-boardItem-info">
        <div className="boardItem-mian">
          <div className="img-flet">
            <div className="boardItem-mian-img ">
              <img src={avatar_url} alt="" />
            </div>
          </div>

          <h2>{name}</h2>
          <span>
            <strong>Location:</strong>
            {location}
          </span>
        </div>
        <div className="boardItem-mian tpp">
          <h3>Bio</h3>
          <p>{bio}</p>
          <p>
            <strong>Username:</strong>
            {login}
          </p>
          <p>
            <strong>Company:</strong>
            {company}
          </p>
          <p>
            <strong>Blog:</strong>
            <a href={blog}>{blog}</a>
          </p>
          <a
            className="limk-a"
            href={html_url}
          >
            Visit Github profile
          </a>
        </div>
      </div>
    );
  }
}

export default BoardItem;
