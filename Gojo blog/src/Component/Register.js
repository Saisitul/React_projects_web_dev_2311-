import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

const Register = () => {
  
  const [newpass, setNewpass] = useState();
  const [checkpass, setCheckpass] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [birthday, setbirthday] = useState();
  const [emailfir, setemailfir] = useState();
  const history = useHistory()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
      emailfir,
      birthday,
      newpass,
      checkpass,
    };
    if (newpass === checkpass) {
      console.log("perfect");
      console.log(data);
      
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(() => {
        console.log("Register data added"); 
        history.push("/")
      });
    } 
    else {
      console.log("Password does not match");
    }
    
  };
  return (
    <div>
      <form className="Login" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <container>
          <label>First Name</label>
          <input
            type="text"
            value={firstname}
            required
            placeholder="First Name"
            onChange={(e) => setfirstname(e.target.value)}
          ></input>
          <label>Last Name</label>
          <input
            type="text"
            value={lastname}
            required
            placeholder="Last Name"
            onChange={(e) => setlastname(e.target.value)}
          ></input>
          <label>Date of Birth</label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setbirthday(e.target.value)}
          ></input>

          <label>Email</label>
          <input
            type="Email"
            value={emailfir}
            required
            placeholder="Email"
            onChange={(e) => setemailfir(e.target.value)}
          ></input>

          <label>New Password</label>
          <input
            type="password"
            required
            value={newpass}
            placeholder="New Password"
            onChange={(e) => setNewpass(e.target.value)}
          ></input>

          <label>Confirm Password</label>
          <input
            type="password"
            required
            value={checkpass}
            placeholder="Confirm Password"
            onChange={(e) => setCheckpass(e.target.value)}
          ></input>

          <br />
          <button type="submit">Register</button>
          </container>
      </form>
    </div>
  );
};

export default Register;
