import { Fragment, useState } from "react";
import FindUser from "./FindUser";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const Users = () => {
  const [showUsers, setShowUsers] = useState(true);
  const [upadatedUser, setUpdateduser] = useState(DUMMY_USERS)

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const searchInputHandler = (searchInput) => {
    let searchUser;
    if (searchInput === '') {
    searchUser = DUMMY_USERS;
    }
    // console.log('Running....');
    // console.log(searchInput);
    searchUser = DUMMY_USERS.filter(user => user.name.includes(searchInput))

    setUpdateduser(searchUser);
  }

  const usersList = (
    <ul>
      {upadatedUser.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <Fragment>
      <FindUser onChange={searchInputHandler}/>
      <div className={classes.users}>
        <button onClick={toggleUsersHandler}>
          {showUsers ? "Hide" : "Show"} Users
        </button>
        {showUsers && usersList}
      </div>
    </Fragment>
  );
};

export default Users;
