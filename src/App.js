import React, { useState } from "react";
import AddUser from "./components/User/Userform";
import UserList from "./components/User/UserList";

function App() {
  const [userList, setuserList] = useState([]);
  const addUserHandler = (uName, uFather, uAge) => {
    setuserList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          Father: uFather,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList user={[userList]} />
    </div>
  );
}

export default App;
