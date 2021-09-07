import React from "react";
import Loadding from "../../Layouts/Loadding";
import UsersItem from "../UsersItem";

const Users = (props) => {
  const { users, isLoading } = props;
  if (isLoading) {
    return <Loadding />;
  }
  return (
    <div className="Users-containe">
      {users.map((usersItem, index) => {
        return <UsersItem users={usersItem} key={index} />;
      })}
    </div>
  );
};

export default Users;
