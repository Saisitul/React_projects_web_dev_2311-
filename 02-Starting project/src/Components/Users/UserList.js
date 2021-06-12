import React from "react";
import Card from "../UI/Card";
import classes from"./UserList.module.css";



//User is the mapping variable name
//Users is the components that comes via props from app.js when UserList is called
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
