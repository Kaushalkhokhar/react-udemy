import React, { useState } from "react";
import MyForm from "./components/MyForm/MyForm";
import UserList from "./components/UserList/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);
  // const [validFlag, setValidFlag] = useState(true);
  let updatedUser = users;

  const getFormData = (userName, userAge) => {
    setUsers((prevUsers) => {
      updatedUser = [
        ...prevUsers,
        { uName: userName, uAge: userAge, id: Math.random().toString() },
      ];
      return updatedUser;
    });
  };
  // console.log(validFlag );

  return (
    <React.Fragment>
      <MyForm onSaveForm={getFormData} />
      <UserList users={updatedUser} />
    </React.Fragment>
  );
};

export default App;
