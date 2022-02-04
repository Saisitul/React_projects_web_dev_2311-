/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Home from './Home'

const Login = () => {
  const [info, setInfo] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false)
  const [err_status, setErrStatus] = useState(false)

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => {
        if (res.ok) {
          console.log("Success");
          return res.json();
        } else {
          console.log("Error");
        }
      })

      .then((data) => {
        // console.log(data);
        // const transformedData = [];
        // for (const key in data) {
        //   transformedData.push({
        //     id: key,
        //     email: data[key].email,
        //     password: data[key].password,
        //   });
        // }
        setInfo(data);
        console.log(info);
      })
      .catch((err) => {
        console.log(err);
        setErrStatus(true)
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const ob = {
      id: Math.random(),
      email: email,
      password: password,
    };
    info.map((x) => {
      if (x.emailfir === ob.email && x.newpass === ob.password) {
        console.log("Login successful");
        setStatus(true)
      }
    });
    setStatus(true)
    setEmail("");
    setPassword("");
  };

  return (
    <>
    <div>
      {status && <Home />}
      {!status && <form onSubmit={handleLogin}>
        <h2>Login Page</h2>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
        <br />
        <button type="submit" id="login">
          Login
        </button>
        {!err_status && <p>Fetch successful</p>}
        {err_status && <p>Fetch failed</p>}
      </form>}
      </div>  
    </>
  );
};

export default Login;
