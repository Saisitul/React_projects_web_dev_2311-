import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  //Here useState is used to update the array list of user data
  const [UsersList, setUsersList] = useState([]);

  //Here addUserHandler is used to merge the data that came via props from AddUser.js
  const addUserHandler = (uNAme, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uNAme, age: uAge ,id: Math.random().toString()}];    //id is used to give a uniqueness to each userdata set of user ARRAy
    });
  };

  //onAddUser this passes addUserHandler to AddUser.js when click is done. thats y given as on
  //UserList is used to send updated data to get mapped
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={UsersList} />
    </div>
  );
}

export default App;

//Notes:-
//1. Here we pass users as props to UserList and the value goes as an empty array
//2. Going forward the users is accesed by props.users
//3. on is used to call all eventlistener when the button is clicked. As the name suggests on is when click is called in the prgram
