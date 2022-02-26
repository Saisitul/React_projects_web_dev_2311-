/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { useState } from "react";
import Login from "./Login";
import validator from "validator";

const Register = () => {
  const [newpass, setNewpass] = useState();
  const [checkpass, setCheckpass] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [birthday, setbirthday] = useState();
  const [emailfir, setemailfir] = useState();
  const [stat, setStat] = useState(false);
  const [err, seterr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Strong Password");
    } else {
      setErrorMessage("Is Not Strong Password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Math.random(),
      firstname,
      lastname,
      emailfir,
      birthday,
      newpass,
      checkpass,
    };
    if (errorMessage === "Is Strong Password") {
      if (newpass === checkpass) {
        console.log(data);
        seterr(false);
        setStat(true);
        fetch("http://localhost:8000/data", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
      } else {
        seterr(true);
        setStat(false);
      }
    }
  };

  return (
    <>
      <div>
        {stat && <Login />}
        {!stat && (
          <form className="Login" onSubmit={handleSubmit}>
            <h2>Register Page</h2>
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              value={firstname}
              required
              placeholder="First Name"
              onChange={(e) => setfirstname(e.target.value)}
            ></input>
            <br />
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              type="text"
              value={lastname}
              required
              placeholder="Last Name"
              onChange={(e) => setlastname(e.target.value)}
            ></input>
            <br />
            <label htmlFor="dob">Date of Birth</label>
            <input
              id="dob"
              type="date"
              value={birthday}
              onChange={(e) => setbirthday(e.target.value)}
            ></input>
            <br />

            <label id="email">Email</label>
            <input
              id="email"
              type="Email"
              value={emailfir}
              required
              placeholder="Email"
              onChange={(e) => setemailfir(e.target.value)}
            ></input>
            <br />

            <label htmlFor="password">New Password</label>
            <input
              id="password"
              type="password"
              required
              value={newpass}
              placeholder="New Password"
              onChange={(e) => setNewpass(e.target.value)}
              onChange={(e) => validate(e.target.value)}
            ></input>
            <span style={{ fontWeight: "bold", color: "red" }}>
              {errorMessage}
            </span>
            <br />

            {err && <p>Passwords are not matching</p>}

            <label htmlFor="cnpassword">Confirm Password</label>
            <input
              id="cnpassword"
              type="password"
              required
              value={checkpass}
              placeholder="Confirm Password"
              onChange={(e) => setCheckpass(e.target.value)}
            ></input>

            <br />
            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Register;
