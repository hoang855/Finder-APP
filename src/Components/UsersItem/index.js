import React from "react";
import { useHistory } from "react-router-dom";
import "./Useritem.css";

const UsersItem = (props) => {
  const { login, avatar_url } = props.users;

  const history = useHistory();
  const onlickUerDetail = () => {
    history.push(`/users/${login}`);
  };

  return (
    <div className="Users-min">
      <div className="Users-flex">
        <div className="Users-img">
          <img src={avatar_url} alt="" />
        </div>
      </div>
      <h3>{login}</h3>
      <button className="User-btn" onClick={onlickUerDetail}>
        MORE
      </button>
    </div>
  );
};

export default UsersItem;
